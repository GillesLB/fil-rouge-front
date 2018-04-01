import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Case } from '../model';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class CaseService {

  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(`${HOST}/case`);
  }
  createAffaire(c: Case): Observable<Case> {
    return this.http.post<Case>(`${HOST}/case`, c);
  }
  getCase(id: number): Observable<Case> {
    return this.http.get<Case>(`${HOST}/case/${id}`);
  }
  updateCase(c: Case): Observable<Case> {
    return this.http.put<Case>(`${HOST}/case/${c.id}`, c);
  }
  associateCaseItem(c: Case): Observable<Case> {
    return this.http.post<Case>(`${HOST}/case`, c);
  }
}
