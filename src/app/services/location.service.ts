import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MyFile} from '../models/my-file.model';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    constructor() {
    }

    getPosition(): Promise<any>
    {
      return new Promise((resolve, reject) => {
  
        navigator.geolocation.getCurrentPosition(resp => {
  
            resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          },
          err => {
            reject(err);
          });
      });
  
    }
}
