import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Case, PieceOfEvidence } from '../model';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class PoeService {

  PieceOfEvidence: PieceOfEvidence;

  constructor(private http: HttpClient) { }

  getPieceOfEvidences(): Observable<PieceOfEvidence[]> {
    return this.http.get<PieceOfEvidence[]>(`${HOST}/pieceofevidence`);
  }
  getPieceOfEvidence(id: number): Observable<PieceOfEvidence> {
    return this.http.get<PieceOfEvidence>(`${HOST}/pieceofevidence/` + id);
  }

  createPieceOfEvidence(pieceOfEvidence: PieceOfEvidence): Observable<PieceOfEvidence> {
    return this.http.post<PieceOfEvidence>(`${HOST}/pieceofevidence`, pieceOfEvidence);
  }

  updatePieceOfEvidence(pieceOfEvidence: PieceOfEvidence): Observable<PieceOfEvidence> {
    return this.http.put<PieceOfEvidence>(`${HOST}/pieceofevidence/${pieceOfEvidence.id}`, pieceOfEvidence);
  }

  deletePieceOfEvidence(id: number): Observable<PieceOfEvidence> {
    return this.http.delete<PieceOfEvidence>(`${HOST}/pieceofevidence/${id}`);
  }

  deletePieceOfEvidenceLink(idCase: number, idPieceOfEvidence: number): Observable<any> {
    return this.http.delete<any>(`${HOST}/linkpieceofevidence/${idCase}/${idPieceOfEvidence}`);
  }
}
