import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ExperienceService {
  baseURL = 'http://localhost:3000/api/experience';

  constructor(private http: Http) { }

  handleError(err) {
    return Observable.throw(err.json().message);
  }

  remove(id): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch( err => this.handleError(err));
  }

  patch(item): Observable<any> {
    return this.http.patch(`${this.baseURL}/${item._id}`, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  add(item): Observable<any> {
    return this.http.post(`${this.baseURL}/new`, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  detail(id): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  all(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
    .map((res: Response) => res.json())
    .map(items => items)
    .catch(err => this.handleError(err));
  }

}
