
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  options = { withCredentials: true };
  baseURL = environment.baseURL + 'api/user';


  handleError(err) {
    return observableThrowError(err.json().message);
  }

  currentUser(): Observable<any> {
    return this.http.get(`${this.baseURL}/private`, this.options).pipe(
      map((res: Response) => res.json()),
      catchError(err => this.handleError(err)),);
  }

}
