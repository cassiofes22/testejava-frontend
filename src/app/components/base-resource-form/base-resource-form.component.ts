import {AfterContentChecked, Directive, Injector, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { BaseResourceModel } from 'app/models/base-resource.model';
import { WrapperApierror } from 'app/models/validation/wrapperApierror';
import { AlertService } from 'app/services/alert.service';
import { BaseResourceService } from 'app/services/base-resource.service';
import { environment } from 'environments/environment';
import {switchMap} from 'rxjs/operators';


@Directive()
export abstract class BaseResourceFormComponent <T extends BaseResourceModel> implements OnInit, AfterContentChecked {
  currencyAction: string; // editando ou criando novo recurso

  serverErrorMessages: WrapperApierror = null;
  resourceForm: FormGroup;
  pageTitle: string;
  submittingForm = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected alertService: AlertService;

  apiFileUrl = `${environment.apiUrl}/file`;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.formBuilder = injector.get(FormBuilder);
    this.alertService = injector.get(AlertService);
  }

  ngOnInit(): void {
    this.setCurrencyAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  submitForm(): void {
    this.submittingForm = true;

    if (this.currencyAction === 'new') {
      this.createResource();
    } else {
      this.updateResource();
    }
  }

  protected setPageTitle(): void {
    if (this.currencyAction === 'new') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }

  }

  protected creationPageTitle(): string {
    return 'Novo';
  }

  protected editionPageTitle(): string {
    return 'Edição';
  }

  public isEdit() {
    return this.currencyAction === 'edit';
  }

  protected setCurrencyAction(): void {
    // this.currencyAction =
    //   this.route.snapshot.url[0].path === 'new' ? 'new' : 'edit';
  }

  protected loadResource(): void {
    if (this.currencyAction === 'edit') {
      this.route.paramMap
        .pipe(
          switchMap((params) => this.resourceService.getById(+params.get('id')))
        )
        .subscribe(
          (resource) => {
            this.resource = resource;
            this.resourceForm.patchValue(this.resource); // binds loaded resource data to ResourceForm
          },
          (error) => alert('Ocorreu um erro no servidor')
        );
    }
  }

  protected createResource(): void {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    this.resourceService.create(resource).subscribe(
      (resourceTemp) => this.actionsForSuccess(resourceTemp),
      (error) => this.actionsForError(error)
    );
  }

  protected updateResource(): void {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(resource).subscribe(
      (resourceTemp) => this.actionsForSuccess(resourceTemp),
      (error) => this.actionsForError(error)
    );
  }

  protected actionsForSuccess(resource: T): void {
    this.alertService.success('Solicitação processada com sucesso!');
    const baseComponentPath = this.route.snapshot.parent.url[0].path;

    // redirect/reload component page
    this.router
      .navigateByUrl(baseComponentPath, {skipLocationChange: true})
      .then(() => this.router.navigate([baseComponentPath]));
  }

  protected redirectToList(): void {
    this.alertService.success('Solicitação processada com sucesso!');
    const baseComponentPath = this.route.snapshot.parent.url[0].path;

    // redirect/reload component page
    this.router
        .navigateByUrl(baseComponentPath, {skipLocationChange: true})
        .then(() => this.router.navigate([baseComponentPath]));
  }

  protected actionsForError(error): void {
    this.alertService.error('Falha ao processar sua solicitação!');
    this.submittingForm = false;

    const wrapper: WrapperApierror = error.error;
    wrapper.status = error.status

    this.serverErrorMessages = wrapper;
    console.log(this.serverErrorMessages);

    this.listenToServiceErrorChange();
  }

  listenToServiceErrorChange() {
    if (this.serverErrorMessages != null && this.serverErrorMessages.apierror != null) {
      if (this.serverErrorMessages.status === 400) {
        this.serverErrorMessages.apierror.subErrors
          .forEach(item => {
            this.resourceForm.controls[item.field].setErrors({'serviceError': item.message});
          });
      }
    }
  }

  protected abstract buildResourceForm(): void;

  public get isDisabledForm() {
    return (this.resourceForm.invalid || this.submittingForm);
  }

  public mustShowErrorMessage(formControl: AbstractControl): boolean {
    return (formControl.invalid && formControl.touched);
  }

  public getErrorMessage(formControl: AbstractControl, fieldName: string): string | null {
    if (formControl.errors.serviceError) {
      return this.getMessageFieldError(fieldName);
    } else if (formControl.errors.required) {
      return 'Campo obrigatório';
    } else if (formControl.errors.email) {
      return 'Formato de email invalido';
    } else if (formControl.errors.minlength) {
      const requiredLength = formControl.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} caracters`;
    } else if (formControl.errors.maxlength) {
      const requiredLength = formControl.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLength} caracters`;
    } else if (formControl.errors.mustMatch) {
      return `Senhas não conferem`;
    }
  }

  getMessageFieldError(nameField: string) {
    let returnMessage;
    if (nameField != null && this.serverErrorMessages != null) {
      this.serverErrorMessages.apierror.subErrors
          .filter(k => k.field === nameField)
          .map(k => {
            returnMessage = k.message;
          });
    }

    return returnMessage;
  }

  loadUrlFile(idFile: string): string {
    return `${this.apiFileUrl}/${idFile}`;
  }

  loadImage(idImage: string): string {
    if (idImage != null) {
      return `${this.apiFileUrl}/${idImage}`;
    } else {
      return 'assets/img/default.png';
    }
  }
}
