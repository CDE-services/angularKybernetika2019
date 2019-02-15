import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Osoba } from '../app.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
};

@Injectable()
export class OsobaService {
  serverUrl = 'http://localhost:38788/api/pouzivatel';

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(this.serverUrl);
  }

  getOsoba(index: number): Observable<Osoba> {
    return this.http.get<Osoba>(this.serverUrl + '/' + index);
  }

  deleteOsoba(index: number): Observable<Osoba> {
    return this.http.delete<Osoba>(this.serverUrl + '/' + index,
                                  httpOptions);
  }

  addOsoba(osoba: Osoba): Observable<Osoba> {
    delete osoba.Id;

    // na serveri mame chybu takze to spravime takto, ze tie data do tej property nakopriujeme:
    osoba['Priezviesko'] = osoba.Priezvisko;
    // rovnako aj v inych metodach sluzby resp. jej volani

    return this.http.post<Osoba>(this.serverUrl, osoba, httpOptions);
  }

  editOsoba(osoba: Osoba): Observable<Osoba> {
    osoba['Priezviesko'] = osoba.Priezvisko;
    return this.http.put<Osoba>(this.serverUrl + '/' + osoba.Id, osoba, httpOptions);
  }
}
