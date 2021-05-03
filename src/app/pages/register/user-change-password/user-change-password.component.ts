import {Component, Injector, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../components/base-form-component/base-form-component.component";
import {UserAuth} from "../../../security/user-auth";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../security/auth.service";
import {AlertService} from "../../../services/alert.service";
import {RegisterService} from "../../../services/register.service";
import {UserCreatePassword} from "../../../models/register/user-create-password.model";
import {UserChangePassword} from "../../../models/register/user-change-password.model";

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent  extends BaseFormComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router,
      private registerService: RegisterService,
      protected route: ActivatedRoute,
      protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.buildResourceForm();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      idUser: [null],
      newPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      oldPassword: [null, [Validators.required]]
    });
  }

  submitForm() {
    this.submittingForm = true;

    const resource: UserChangePassword = UserChangePassword.fromJson(this.resourceForm.value);
    resource.idUser = this.authService.currentUser.idUser;

    this.registerService.changePassword(resource).subscribe(
        (resourceTemp) => this.actionsForSuccess(resourceTemp),
        (error) => this.actionsForError(error)
    );
  }

  protected actionsForSuccess(resource: UserCreatePassword): void {
    this.alertService.success('Solicitação processada com sucesso!');
    this.router.navigate(['/']);
  }

}
