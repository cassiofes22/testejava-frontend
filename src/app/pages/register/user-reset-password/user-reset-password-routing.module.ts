import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserResetPasswordComponent} from "./user-reset-password.component";

const routes: Routes = [
  { path: '', component: UserResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserResetPasswordRoutingModule { }
