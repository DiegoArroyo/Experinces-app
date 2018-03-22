import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class ExperienceService {
  options = {withCredentials: true};
  baseURL = environment.baseURL + 'api/experience';

  constructor(private http: Http) { }

  handleError(err) {
    return Observable.throw(err.json().message);
  }

// falta llamar el metodo en el componente 
  addFav(id): Observable<any> {
    return this.http.post(`${this.baseURL}/addFavorite/${id}`, {}, this.options)
    .map((res: Response) => res.json())
    .catch(err => this.handleError(err));
  }

  remove(id): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch( err => this.handleError(err));
  }

  patch(item, id): Observable<any> {
    return this.http.patch(`${this.baseURL}/edit/${id}`, item)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  detail(id): Observable<any> {
    return this.http.get(`${this.baseURL}/detail/${id}`)
    .map((res: Response) => res.json())
    .map(item => item)
    .catch(err => this.handleError(err));
  }

  all(): Observable<any> {
    return this.http.get(`${this.baseURL}/all`)
    .map((res: Response) => res.json())
    .map(items => items)
    .catch(err => this.handleError(err));
  }

}
