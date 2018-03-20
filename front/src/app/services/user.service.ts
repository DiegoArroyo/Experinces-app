import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  baseURL = 'http://localhost:3000/api/user';

  handleError(err) {
    return Observable.throw(err.json().message);
  }

  currentUser(id): Observable<any> {
    return this.http.get(`${this.baseURL}/private/${id}`)
    .map((res: Response) => res.json())
    .map(user => user)
    .catch(err => this.handleError(err));
  }

}
