import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncesService {
  apiUrl = 'https://ghadiapp.herokuapp.com/api'

  constructor(private http: HttpClient) {}

  getAnnouncesClient(cat:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/announcesClients/luggage/${cat}`);
  }

  getAnnouncesDriver(cat:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/announcesDrivers/vehicule/${cat}`);
  }

}