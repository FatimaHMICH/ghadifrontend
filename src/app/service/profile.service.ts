import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../profile/profil.model';

@Injectable({
    providedIn: 'root',

})
export class ProfileService {
    apiUrl = 'https://ghadiapp.herokuapp.com/api';

    constructor(private http: HttpClient){}
  

    getClientProfile(id:any): Observable<Profile[]>{
        return this.http.get<Profile[]>(`${this.apiUrl}/client/${id}`);
    }

    getDriverProfile(id:any): Observable<Profile[]>{
        return this.http.get<Profile[]>(`${this.apiUrl}/driver/${id}`);
    }

}