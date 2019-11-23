import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

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
