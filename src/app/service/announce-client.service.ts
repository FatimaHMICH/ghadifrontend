import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnounceClient } from '../announce-client/announceClient.model';

@Injectable({
  providedIn: 'root',
})
export class AnnounceClientService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  addAnnounce(announceClient: AnnounceClient): Observable<AnnounceClient> {
    return this.http.post<AnnounceClient>(
      `${this.apiUrl}/announcesClients`,
      announceClient
    );
  }
}
