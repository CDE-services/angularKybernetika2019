import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Osoba } from '../app.model';
import { Observable } from 'rxjs';

@Injectable()
export class OsobaService {
  serverUrl = 'http://localhost:38788/api/pouzivatel';

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(this.serverUrl);
  }

  // getOsoba(index: number)
  // deleteOsoba(index: number)
  // addOsoba(osoba: Osoba)
  // editOsoba(osoba: Osoba)
}
