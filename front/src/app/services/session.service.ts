import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {
  baseURL = 'http://localhost:3000/api/auth';
  user: any;
  loginEvent: EventEmitter<any> = new EventEmitter();
  options = { withCredentials: true };

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getLoginEmitter(): EventEmitter<any> {
    return this.loginEvent;
  }

  signedIn(): Observable<any> {
    return this.http.get(`${this.baseURL}/signedin`, this.options)
    .map(res => res.json())
    .map(user => user)
    .catch(err => this.handleError(err));
  }

  signOut(): Observable<any> {
    return this.http.post(`${this.baseURL}/signout`, {})
    .map(res => res.json())
    .catch(err => this.handleError(err));
  }

  signIn(signinForm): Observable<any> {
    return this.http.post(`${this.baseURL}/signin`, signinForm, this.options)
    .map(res => res.json())
    .map(user => { this.loginEvent.emit(user); this.user = user; return user;})
    .catch(err => this.handleError(err));
  }

  signUp(signupForm): Observable<any> {
    return this.http.post(`${this.baseURL}/signup`, signupForm, this.options )
    .map(res => res.json())
    .catch(err => {
      alert(JSON.parse(err._body).message);
      return this.handleError(err);
    });
  }

}
