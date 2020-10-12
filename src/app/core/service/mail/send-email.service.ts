import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from '../../../shared/Models/Contact';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  user: Contact = null;
  mailBaseUrl = environment.emailBaseUrl;
  
  constructor(private http: Http) {
    this.user = null;
  }

  RequestMail(user: Contact): Observable<Response> {
    this.user = user;
    let headertypes = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headertypes });
    let body = JSON.stringify(this.user);
    return this.http.post(this.mailBaseUrl, body, options);
  }
}