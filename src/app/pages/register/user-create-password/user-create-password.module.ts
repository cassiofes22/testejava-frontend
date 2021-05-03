import { NgModule } from '@angular/core';
import { UserCreatePasswordRoutingModule } from './user-create-password-routing.module';
import { UserCreatePasswordComponent } from './user-create-password.component';
import {SharedModule} from "../../../modules/shared.module";

@NgModule({
  declarations: [UserCreatePasswordComponent],
  imports: [
    SharedModule,
    UserCreatePasswordRoutingModule
  ]
})
export class UserCreatePasswordModule { }
