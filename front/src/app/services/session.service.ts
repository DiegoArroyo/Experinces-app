import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SessionService {

  options = { withCredentials: true };

  constructor(private http: Http) { }

  handleError(err) {
    return Observable.throw(err.json().message);
  }

  signUp(signupForm): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', signupForm, this.options )
    .map(res => res.json())
    .catch(err => {
      alert(JSON.parse(err._body).message);
      return this.handleError(err);
    });
  }

  signIn(signinForm) {
    return this.http.post('http://localhost:3000/auth/signin', signinForm, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));
  }

  signedIn() {
    return this.http.get(`http://localhost:3000/auth/signedin`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));
  }


}
