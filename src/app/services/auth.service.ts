import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase = "http://localhost:8080/api/bingo/auth";

  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }

  login(username: string, password: string): Observable<any> {
    const payload = { username, password};
    return this.httpClient.post(`${this.urlBase}/login`, payload);
  }

  register(username: string, password: string): Observable<any> {
    const payload = {username, password};
    return this.httpClient.post(`${this.urlBase}/register`, payload);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
