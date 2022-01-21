import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnounceClient, AnnounceDriver } from '../announce-client/announceClient.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncesService {
  apiUrl = 'https://ghadiapp.herokuapp.com/api'

  constructor(private http: HttpClient) {}

  getAnnouncesClient(cat:any): Observable<AnnounceClient[]> {
    return this.http.get<AnnounceClient[]>(`${this.apiUrl}/announcesClients/luggage/${cat}`);
  }

  getAnnouncesDriver(cat:any): Observable<AnnounceDriver[]> {
    return this.http.get<AnnounceDriver[]>(`${this.apiUrl}/announcesDrivers/vehicule/${cat}`);
  }

}