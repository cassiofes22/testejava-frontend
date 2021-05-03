import {Component, Injector, OnInit} from '@angular/core';
import {UserAuth} from "../../../security/user-auth";
import {Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../security/auth.service";

import { environment } from 'environments/environment';
import { BaseFormComponent } from 'app/components/base-form-component/base-form-component.component';
import { AlertService } from 'app/services/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

    userAuth: UserAuth;

    constructor(
        private router: Router,
        private authService: AuthService,
        private alertServiceService: AlertService,
        protected injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
        this.userAuth = new UserAuth();

        if (this.authService.isLoggedIn()) {
            this.router.navigate(['']);
        }

        this.buildResourceForm();
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    submitForm() {
        this.submittingForm = true;
        this.authService.login(UserAuth.fromJson(this.resourceForm.value))
            .subscribe(result => {
                    if (result) {
                        this.alertServiceService.success('Sucesso ao realizar login');
                        this.router.navigate(['']);
                    } else {
                        this.alertServiceService.error('Usuário ou senha inválidos!');
                    }
                },
                (error) => {
                    this.actionsForError(error);
                }
            );
    }

    protected actionsForError(error): void {
        this.submittingForm = false;
        if (error.status === 401) {
            this.alertServiceService.error('Usuário ou senha inválidos!');
        } else {
            this.alertServiceService.error('Erro ao processar requisição!');
        }
    }

    loadImage(): string {
        return 'assets/img/logo.png';
      }


}
