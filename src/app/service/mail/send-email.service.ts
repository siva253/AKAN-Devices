import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs';

import { Contact } from '../../Models/Contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  user: Contact = null;
  constructor(private http: Http) { 
    this.user = null;
  }

  RequestMail(user: Contact):Observable<Response>{
    this.user = user;
    let headertypes = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headertypes});
    let body = JSON.stringify(this.user);
    return this.http.post('http://localhost:8000/send-email',body,options);
  }
}
