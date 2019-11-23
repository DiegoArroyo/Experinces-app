import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.http.get(`${this.baseURL}/private`, this.options)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

}
