import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../signup/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  apiUrl = 'https://ghadiapp.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  addClient(signUp: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>(
      `${this.apiUrl}/client`,
      signUp
    );
  }

  addDriver(signUp: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>(
      `${this.apiUrl}/driver`,
      signUp
    );
  }

}
