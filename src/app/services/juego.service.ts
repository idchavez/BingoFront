import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private urlBase = 'http://localhost:8080/api/bingo';

  constructor(private httpClient: HttpClient) { }

  iniciarJuego(): Observable<number[][]> {
    return this.httpClient.post<number[][]>(`${this.urlBase}/sala`, {});
  }

  sortearNumero(): Observable<{numeroSorteado: number; tarjeta: number[][]}> {
    return this.httpClient.get<{numeroSorteado: number; tarjeta: number[][]}>(`${this.urlBase}/sorteo`);
  }

  obtenerTarjeta(): Observable<number[][]> {
    return this.httpClient.get<number[][]>(`${this.urlBase}/tarjeta`);
  }

  marcarNumero(i: number, j: number, numeroSorteado: number, matriz: number[][]): Observable<number[][]> {
    return this.httpClient.post<number[][]>(`${this.urlBase}/marcarNumero`, {
      matriz,
      numeroSorteado,
      i,
      j
    });
  }

  validarBingo(tarjeta: number[][]): Observable<any> {
    return this.httpClient.post(`${this.urlBase}/validar`, tarjeta);
  }

  reiniciarBombo(): Observable<any> {
    return this.httpClient.post(`${this.urlBase}/reiniciar`, {});
  }

}
