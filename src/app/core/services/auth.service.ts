import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) { }

  login(data: { email: string, password: string }) {
    return this.http.post(`${this.api}/login`, data);
  }

  register(data: { name: string, email: string, password: string }) {
    return this.http.post(`${this.api}/register`, data);
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
