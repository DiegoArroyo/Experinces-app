import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ExperienceService {

  constructor(private http: Http) { }

  handleError(err) {
    return Observable.throw(err.json().message);
  }

  remove(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/${id}`)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch( err => this.handleError(err));
  }

  patch(item): Observable<any> {
    return this.http.patch(`http://localhost:3000/${item._id}`, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  add(item): Observable<any> {
    return this.http.post('http://localhost:3000', item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  detail(id): Observable<any> {
    return this.http.get(`http://localhost:3000/${id}`)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  all(): Observable<any> {
    return this.http.get('http://localhost:3000')
    .map((res: Response) => res.json())
    .map(items => items)
    .catch(err => this.handleError(err));
  }

}
