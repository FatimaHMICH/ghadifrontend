import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnounceClient } from '../announce-client/announceClient.model';

@Injectable({
  providedIn: 'root',
})
export class AnnounceClientService {
  apiUrl = ' http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  addAnnounceClients(announceClient: AnnounceClient): Observable<AnnounceClient> {
    return this.http.post<AnnounceClient>(
      `${this.apiUrl}/announcesClients`,
      announceClient
    );
  }

  addAnnounceDrivers(announceClient: AnnounceClient): Observable<AnnounceClient> {
    return this.http.post<AnnounceClient>(
      `${this.apiUrl}/announcesDrivers`,
      announceClient
    );
  }
}
