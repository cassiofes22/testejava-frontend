import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserChangePasswordComponent} from "./user-change-password.component";

const routes: Routes = [
  { path: '', component: UserChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserChangePasswordRoutingModule { }
