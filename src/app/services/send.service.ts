import { Send } from './../models/send.model';
import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from './base-resource.service';
import {environment} from '../../environments/environment';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SendService extends BaseResourceService<Send> {

  // httpService: HttpService;

  constructor(protected router: Router, private httpService: HttpService, protected injector: Injector) {
    super(`${environment.apiUrl}/pessoa/json`, injector, Send.fromJson);
  }

  public sendJSON(json: string) {
    this.httpService.sendJSON(`${environment.apiUrl}/pessoa/json`, json).subscribe(res => {
      console.warn(res);
      this.router.navigate(['/dashboard']);
    });
  }

}
