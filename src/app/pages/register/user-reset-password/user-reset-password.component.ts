import { Component, Injector, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../components/base-form-component/base-form-component.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { Validators } from '@angular/forms';
import { UserCreatePassword } from '../../../models/register/user-create-password.model';
import { User } from '../../../models/register/user.model';

@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.css']
})
export class UserResetPasswordComponent extends BaseFormComponent implements OnInit {

  constructor(
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
      dsEmail: [null, [Validators.required, Validators.email, Validators.maxLength(255)]]
    });
  }

  submitForm() {
    this.submittingForm = true;

    const resource: User = User.fromJson(this.resourceForm.value);
    this.registerService.resetPassword(resource.dsEmail).subscribe(
      (resourceTemp) => this.actionsForSuccess(resourceTemp),
      (error) => this.actionsForError(error)
    );
  }

  protected actionsForSuccess(resource: UserCreatePassword): void {
    this.alertService.success('Solicitação processada com sucesso!');
    this.router.navigate(['/login']);
  }

  loadImage(): string {
    return 'assets/img/logo.jpg';
  }

}
