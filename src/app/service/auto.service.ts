import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Auto, Osoba } from './../app.model';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
};

@Injectable()
export class AutoService {
  serverUrl = 'http://localhost:38788/api/auto';

  constructor(private http: HttpClient) { }

  getAuta(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.serverUrl);
  }

  getAuto(index: number): Observable<Auto> {
    return this.http.get<Auto>(this.serverUrl + '/' + index);
  }

  deleteAuto(index: number): Observable<Auto> {
    return this.http.delete<Auto>(this.serverUrl + '/' + index,
                                 httpOptions);
  }

  addAuto(auto: Auto): Observable<Auto> {
    delete auto.Id;
    return this.http.post<Auto>(this.serverUrl, auto, httpOptions);
  }

  editAuto(auto: Auto): Observable<Auto> {
    return this.http.put<Auto>(this.serverUrl + '/' + auto.Id, auto, httpOptions);
  }
}
