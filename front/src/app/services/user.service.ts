import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  options = { withCredentials: true };
  baseURL = environment.baseURL + 'api/user';


  handleError(err) {
    return Observable.throw(err.json().message);
  }

  currentUser(): Observable<any> {
    return this.http.get(`${this.baseURL}/private`, this.options)
    .map((res: Response) => res.json())
    .catch(err => this.handleError(err));
  }

}
