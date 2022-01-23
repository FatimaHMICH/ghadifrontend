import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnounceClient, AnnounceDriver } from '../announce-client/announceClient.model';

@Injectable({
  providedIn: 'root'
})
export class MyAnnouncesService {

  apiUrl = ' http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getMyDriverAnnounces(id_user:any): Observable<AnnounceDriver[]> {
    return this.http.get<AnnounceDriver[]>(`${this.apiUrl}/myAnnouncesAsDriver/${id_user}`);
  }

  getMyClientAnnounces(id_user:any): Observable<AnnounceClient[]> {
    return this.http.get<AnnounceClient[]>(`${this.apiUrl}/myAnnouncesAsClient/${id_user}`);
  }

  deleteClientAnnounce(id:any): Observable<AnnounceClient[]> {
    return this.http.delete<AnnounceClient[]>(`${this.apiUrl}/clientAnnounce/${id}`);
  }

  deleteDriverAnnounce(id:any): Observable<AnnounceDriver[]> {
    return this.http.delete<AnnounceDriver[]>(`${this.apiUrl}/driverAnnounce/${id}`);
  }

}