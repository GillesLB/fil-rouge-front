import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Case } from '../model';
import { Weapon } from '../model';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class WeaponService {
  weapon: Weapon;

  constructor(private http: HttpClient) { }

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(`${HOST}/weapon`);
  }

  getWeapon(id: number): Observable<Weapon> {
    return this.http.get<Weapon>(`${HOST}/weapon/` + id);
  }

  formWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.post<Weapon>(`${HOST}/weapon`, weapon);
  }

  createWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.post<Weapon>(`${HOST}/weapon`, weapon);
  }

  updateWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.put<Weapon>(`${HOST}/weapon/${weapon.id}`, weapon);
  }

  deleteWeapon(id: number): Observable<Weapon> {
    return this.http.delete<Weapon>(`${HOST}/weapon/${id}`);
  }

  deleteWeaponLink(data): Observable<any> {
    return this.http.delete<any>(`${HOST}/linkWeapon/${data[0]}/${data[1]}`);
  }
}
