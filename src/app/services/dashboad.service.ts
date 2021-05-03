import { Injectable, Injector } from '@angular/core';

import { environment } from '../../environments/environment';
import { Dashboard } from './../models/dashboard.model';
import { BaseResourceService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseResourceService<Dashboard> {

  constructor(protected injector: Injector) {
    super(`${environment.apiUrl}/dashboard`, injector, Dashboard.fromJson);
  }

}
