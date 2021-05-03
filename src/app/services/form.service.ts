import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from './base-resource.service';
import {environment} from '../../environments/environment';
import {Form} from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService extends BaseResourceService<Form> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/manaut-api/form`, injector, Form.fromJson);
  }

}
