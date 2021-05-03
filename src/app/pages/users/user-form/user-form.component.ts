import { User } from '../../../models/register/user.model';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'app/components/base-resource-form/base-resource-form.component';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends BaseResourceFormComponent<User> {

  constructor(protected userService: UserService, protected injector: Injector) {
    super(injector, new User(), userService, User.fromJson)
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      idUser: [null],
      dsEmail: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      nmUser: [null, [Validators.required, Validators.maxLength(255)]],
      nuCel: [null, [Validators.required, Validators.maxLength(9)]],
      nuDddCel: [null, [Validators.required, Validators.maxLength(2)]],
    });
  }

}
