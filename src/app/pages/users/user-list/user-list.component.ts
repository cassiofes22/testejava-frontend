import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/register/user.model';
import { BaseResourceListComponent } from '../../../components/base-resource-list/base-resource-list.component';
import { UserService } from '../../../services/user.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseResourceListComponent<User> {

  constructor(private userService: UserService) {
    super(userService);
  }

  public hideIsAdminEmail(dsEmail: string) {
    return environment.emailAdmin !== dsEmail;
  }


}
