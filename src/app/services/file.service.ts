import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MyFile} from '../models/my-file.model';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    apiFileUrl = `${environment.apiUrl}/manaut-api/file`;
    fileInput: FormData;

    constructor(private http: HttpClient) {

        this.fileInput = new FormData();
    }

    createFile(resourceFile: File): Observable<MyFile> {
        this.fileInput.set('file', resourceFile);
        return this.http.post(this.apiFileUrl,  this.fileInput).pipe(
            map(a => MyFile.fromJson(a)),
            catchError(this.handlerError)
        );
    }

    deleteFile(id: any): Observable<any> {
        if(id === undefined)
            return null;

        const url = `${this.apiFileUrl}/${id}`;

        return this.http.delete(url).pipe(
            catchError(this.handlerError),
            map(() => null)
        );
    }

    protected handlerError(error: any): Observable<any> {
        console.log('Error to request -> ', error);
        return throwError(error);
    }
}
