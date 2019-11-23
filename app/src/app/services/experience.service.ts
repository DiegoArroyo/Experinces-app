import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ExperienceService {
  options = { withCredentials: true };
  baseURL = environment.baseURL + 'api/experience';

  constructor(private http: HttpClient) { }

  handleError(err) {
    return observableThrowError(err.json().message);
  }

  // falta llamar el metodo en el componente 
  addFav(id): Observable<any> {
    return this.http.post(`${this.baseURL}/addFavorite/${id}`, {}, this.options)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  remove(id): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  patch(item, id): Observable<any> {
    return this.http.patch(`${this.baseURL}/edit/${id}`, item)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  detail(id): Observable<any> {
    return this.http.get(`${this.baseURL}/detail/${id}`)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  all(): Observable<any> {
    return this.http.get(`${this.baseURL}/all`)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

}
