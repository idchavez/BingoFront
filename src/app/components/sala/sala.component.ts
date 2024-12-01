import { JuegoService } from './../../services/juego.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {

  tarjeta: number[][];
  numeroSorteado: number;

  constructor(private juegoService: JuegoService) {}

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.juegoService.iniciarJuego().subscribe(
      (datos => {
        this.tarjeta = datos;
      })
    );
  }

  sortearNumero() {
    this.juegoService.sortearNumero().subscribe(
      datos => {
        this.numeroSorteado = datos.numeroSorteado;
        this.tarjeta = datos.tarjeta;
      });
  }
}
