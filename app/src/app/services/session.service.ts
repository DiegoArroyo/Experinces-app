
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {

  baseURL = environment.baseURL + 'api/auth';
  user: any;
  loginEvent: EventEmitter<any> = new EventEmitter();
  options = { withCredentials: true };

  constructor(private http: HttpClient) { }

  handleError(e) {
    return observableThrowError(e.json().message);
  }

  getLoginEmitter(): EventEmitter<any> {
    return this.loginEvent;
  }

  signedIn(): Observable<any> {
    return this.http.get(`${this.baseURL}/signedin`, this.options).pipe(
      map(res => res.json()),
      map(user => user),
      catchError(err => this.handleError(err)),);
  }

  signOut(): Observable<any> {
    return this.http.post(`${this.baseURL}/signout`, {}, this.options).pipe(
      map(res => res.json()),
      catchError(err => this.handleError(err)),);
  }

  signIn(signinForm): Observable<any> {
    return this.http.post(`${this.baseURL}/signin`, signinForm, this.options).pipe(
      map(res => res.json()),
      map(user => { this.loginEvent.emit(user); this.user = user; return user; }),
      catchError(err => this.handleError(err)),);
  }

  signUp(signupForm): Observable<any> {
    return this.http.post(`${this.baseURL}/signup`, signupForm, this.options).pipe(
      map(res => res.json()),
      catchError(err => {
        alert(JSON.parse(err._body).message);
        return this.handleError(err);
      }),);
  }

}
