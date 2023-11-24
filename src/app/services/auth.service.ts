import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}

  login(email: string, password: string) {
    const body = new HttpParams()
      .set('username', email)
      .set('password', password);

    return this.http.post<any>('auth/login', body);
  }
}
