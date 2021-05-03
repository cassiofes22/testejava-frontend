import { NgModule } from '@angular/core';
import { UserResetPasswordRoutingModule } from './user-reset-password-routing.module';
import { UserResetPasswordComponent } from './user-reset-password.component';
import { SharedModule } from '../../../modules/shared.module';

@NgModule({
  declarations: [UserResetPasswordComponent],
  imports: [
    SharedModule,
    UserResetPasswordRoutingModule
  ]
})
export class UserResetPasswordModule { }
