import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnounceClient, AnnounceDriver } from '../announce-client/announceClient.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = 'https://ghadiapp.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getDateDriver(): Observable<AnnounceDriver[]> {
    return this.http.get<AnnounceDriver[]>(`${this.apiUrl}/todaysDriversAnnounces`);
  }

  getDateClient(): Observable<AnnounceClient[]> {
    return this.http.get<AnnounceClient[]>(`${this.apiUrl}/todaysClientsAnnounces`);
  }

  getAllDrivers(): Observable<AnnounceDriver[]> {
    return this.http.get<AnnounceDriver[]>(`${this.apiUrl}/announcesDrivers`);
  }

  getAllClients(): Observable<AnnounceClient[]> {
    return this.http.get<AnnounceClient[]>(`${this.apiUrl}/announcesClients`);
  }
  
}

