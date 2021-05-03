import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCreatePasswordComponent} from "./user-create-password.component";

const routes: Routes = [
  { path: '', component: UserCreatePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreatePasswordRoutingModule { }
