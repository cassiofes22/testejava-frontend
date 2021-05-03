import { Component, Injector, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'app/components/base-form-component/base-form-component.component';
import { UserCreatePassword } from 'app/models/register/user-create-password.model';
import { RegisterService } from 'app/services/register.service';


@Component({
    selector: 'app-user-create-password',
    templateUrl: './user-create-password.component.html',
    styleUrls: ['./user-create-password.component.css']
})
export class UserCreatePasswordComponent extends BaseFormComponent implements OnInit {

    idUser: number;
    dsToken: string;

    constructor(
        private router: Router,
        private registerService: RegisterService,
        protected route: ActivatedRoute,
        protected injector: Injector) {
        super(injector);

        this.idUser = this.route.snapshot.params.id;
        this.dsToken = this.route.snapshot.params.dsToken;
    }

    ngOnInit(): void {
        this.buildResourceForm();
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            idUser: [null],
            newPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
            confirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]]
        });
    }

    submitForm() {
        this.submittingForm = true;

        const resource: UserCreatePassword = UserCreatePassword.fromJson(this.resourceForm.value);
        resource.idUser = this.idUser;

        this.registerService.createPassword(resource, this.dsToken)
            .subscribe(result => {
                if (result) {
                    this.alertService.success('Sucesso ao cadastrar uma senha!');
                    this.router.navigate(['/login']);
                } else {
                    this.alertService.error('Falha ao processar sua solicitação!');
                }
            },
                (error) => {
                    this.actionsForError(error);
                }
            );
    }

    loadImage(): string {
        return 'assets/img/logo.jpg';
    }

}
