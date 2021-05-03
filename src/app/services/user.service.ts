import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from './base-resource.service';
import {environment} from '../../environments/environment';
import {User} from '../models/register/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/manaut-api/user`, injector, User.fromJson);
  }

}
