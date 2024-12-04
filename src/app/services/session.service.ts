import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private urlBase = "http://localhost:8080/api/bingo";

  constructor(private httpClient: HttpClient) { }

  obtenerSesiones(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.urlBase}/sesiones`);
  }
}
