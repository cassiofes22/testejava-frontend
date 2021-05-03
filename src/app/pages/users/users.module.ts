import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
