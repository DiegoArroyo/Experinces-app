import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class BookingService {
  baseURL = environment.baseURL + 'api/booking';

  constructor(private http: Http) { }

  handleError(err) {
    return Observable.throw(err.json().message);
  }

  add(id, user): Observable<any> {
    return this.http.post(`${this.baseURL}/new/${id}`, user)
    .map((res: Response) => res.json())
    .catch(err => this.handleError(err));
  }
}
