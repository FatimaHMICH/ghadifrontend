import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../login/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'https://ghadiapp.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getClients(userName:String): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.apiUrl}/client/userName/${userName}`);
  }

  getDrivers(userName:String): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.apiUrl}/driver/userName/${userName}`);
  }

  getAllClients(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.apiUrl}/driver`);
  }

  getAllDrivers(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.apiUrl}/client`);
  }

}
