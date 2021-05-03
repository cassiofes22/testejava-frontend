import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {User} from '../models/register/user.model';
import {UserChangePassword} from '../models/register/user-change-password.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiPath = `${environment.apiUrl}/manaut-api`;
  resetPasswordPath  = `${this.apiPath}/user/password/reset`;
  createPasswordPath = `${this.apiPath}/user/password/create`;
  changePasswordPath = `${this.apiPath}/user/password`;

  constructor(private http: HttpClient) {

  }

  public resetPassword(dsEmail: string): Observable<User> {
    const url = `${this.resetPasswordPath}/${dsEmail}`;
    return this.http.get(url).pipe(
        map(user => {User.fromJson(user)}),
        catchError(this.handlerError)
    );
  }

  public createPassword(resource: UserChangePassword, dsToken: string): Observable<UserChangePassword> {
    const url = `${this.createPasswordPath}/${resource.idUser}/${dsToken}`;
    return this.http.put(url, resource).pipe(
        map(() => resource),
        catchError(this.handlerError)
    );
  }

  changePassword(userChangePassword: UserChangePassword): Observable<User> {
    const url = `${this.changePasswordPath}/${userChangePassword.idUser}`;
    return this.http.put(url, userChangePassword).pipe(
        map(user => {User.fromJson(user)}),
        catchError(this.handlerError)
    );
  }

  protected handlerError(error: any): Observable<any> {
    console.log('Error to request -> ', error);
    return throwError(error);
  }
}
