import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

  export class HttpService {

    constructor(private http: HttpClient) {
    }

    sendJSON(url: string, json: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        return this.http.post(url, json, httpOptions);
    }
  
  }