import {Component, Injector} from '@angular/core';
import {BaseResourceFormComponent} from "../../../components/base-resource-form/base-resource-form.component";
import {HttpClient} from "@angular/common/http";
import {FileService} from "../../../services/file.service";
import {Form} from "../../../models/form.model";
import {FormService} from "../../../services/form.service";
import {Validators} from "@angular/forms";
import {MaxSizeValidator} from "@angular-material-components/file-input";
import {MyFile} from "../../../models/my-file.model";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { LocationService } from 'app/services/location.service';
import { Picture } from 'app/models/picture.model';

@Component({
    selector: 'app-form-form',
    templateUrl: './form-form.component.html',
    styleUrls: ['./form-form.component.css']
})
export class FormFormComponent extends BaseResourceFormComponent<Form> {

    maxSize = (1000000);
    accept = 'image/*';

    pictureList: Picture[];

    // toggle webcam on/off
    public showWebcam = false;
    public allowCameraSwitch = true;
    public multipleWebcamsAvailable = false;
    public deviceId: string;
    public videoOptions: MediaTrackConstraints = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
    };
    public errors: WebcamInitError[] = [];

    // latest snapshot
    public webcamImage: WebcamImage = null;

    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

    constructor(protected formService: FormService,
                protected injector: Injector,
                protected locationService: LocationService,
                private http: HttpClient,
                private fileService: FileService) {
        super(injector, new Form(), formService, Form.fromJson);

    }

    ngOnInit(): void {
        this.setCurrencyAction();
        this.buildResourceForm();
        this.loadResource();

        WebcamUtil.getAvailableVideoInputs()
            .then((mediaDevices: MediaDeviceInfo[]) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            idForm: [null],
            tbFiles: [null],
            dsForm: [null, [Validators.required, Validators.maxLength(255)]],

            fileControl: [null, [MaxSizeValidator(this.maxSize)]]
        });
    }


    public submit() {
        this.submittingForm = true;

        if (this.isEdit()) {
            if (this.resourceForm.value.fileControl) {
                this.fileService.createFile(this.resourceForm.value.fileControl.files[0]).subscribe(
                    (createdFile) => this.updateFormWithFile(createdFile),
                    (error) => this.actionsForError(error)
                );
            } else {
                this.updateForm();
            }
        } else {
            this.fileService.createFile(this.resourceForm.value.fileControl.files[0]).subscribe(
                (createdFile) => this.createForm(createdFile),
                (error) => this.actionsForError(error)
            );
        }
    }

    private updateFormWithFile(createdFile: MyFile): void {
        let idFileToTrash;

        if (this.resource.tbFiles[0] != undefined)
            idFileToTrash = this.resource.tbFiles[0].idFile;

        this.resourceForm.value.tbFiles.push(new MyFile(createdFile.idFile));
        console.log(this.resourceForm.value)
        this.formService.update(Form.fromJson(this.resourceForm.value)).subscribe(
            (responseGoal) => {
                if (idFileToTrash)
                    this.fileService.deleteFile(idFileToTrash).subscribe();
                this.redirectToList()
            },
            (error) => this.deleteFileWhenError(error, createdFile)
        );
    }

    private deleteFileWhenError(error, resource: MyFile) {
        this.actionsForError(error);
        this.fileService.deleteFile(resource.getId()).subscribe();
    }

    private updateForm(): void {
        this.formService.update(Form.fromJson(this.resourceForm.value)).subscribe(
            (responseGoal) => this.redirectToList(),
            (error) => this.actionsForError(error)
        );
    }

    private createForm(createdFile: MyFile): void {
        this.resourceForm.value.idFile = createdFile.idFile;
        this.formService.create(Form.fromJson(this.resourceForm.value)).subscribe(
            (responseGoal) => this.redirectToList(),
            (error) => this.deleteFileWhenErrorSaveForm(error, createdFile)
        );
    }

    private deleteFileWhenErrorSaveForm(error, resource: MyFile) {
        this.actionsForError(error);
        this.fileService.deleteFile(resource.getId()).subscribe();
    }

    public triggerSnapshot(): void {
        this.trigger.next();
        this.locationService.getPosition().then(pos=> {
            console.log(`Positon: ${pos.lng} ${pos.lat}`);
        });
    }

    public toggleWebcam(): void {
        this.showWebcam = !this.showWebcam;
    }

    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    public showNextWebcam(directionOrDeviceId: boolean|string): void {
        this.nextWebcam.next(directionOrDeviceId);
    }

    public handleImage(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
        this.locationService.getPosition().then(pos=> {
            const picture = new Picture();
            picture.picture = this.webcamImage.imageAsDataUrl;
            picture.latitude = pos.lat;
            picture.longitude = pos.lng;
            this.pictureList = JSON.parse(localStorage.getItem('pictureList'));
            if(this.pictureList == null) {
                this.pictureList = new Array();
            }
            this.pictureList.push(picture);
            localStorage.setItem('pictureList', JSON.stringify(this.pictureList))
        });
    }

    public cameraWasSwitched(deviceId: string): void {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public get nextWebcamObservable(): Observable<boolean|string> {
        return this.nextWebcam.asObservable();
    }
}
