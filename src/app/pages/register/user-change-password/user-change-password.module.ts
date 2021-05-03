import {NgModule} from '@angular/core';
import {UserChangePasswordRoutingModule} from './user-change-password-routing.module';
import {UserChangePasswordComponent} from './user-change-password.component';
import {SharedModule} from "../../../modules/shared.module";

@NgModule({
  declarations: [UserChangePasswordComponent],
  imports: [
    SharedModule,
    UserChangePasswordRoutingModule
  ]
})
export class UserChangePasswordModule { }
