import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnounceClient, AnnounceDriver } from '../announce-client/announceClient.model';


@Injectable({
  providedIn: 'root'
})
export class AnnounceDetailService {

  apiUrl = 'https://ghadiapp.herokuapp.com/api'

  constructor(private http: HttpClient) {}

  getAnnounceDetailClient(id:any): Observable<AnnounceClient[]> {
    return this.http.get<any[]>(`${this.apiUrl}/announcesClients/${id}`);
  }

  getAnnounceDetailDriver(id:any): Observable<AnnounceDriver[]> {
    return this.http.get<any[]>(`${this.apiUrl}/announcesDrivers/${id}`);
}
}
