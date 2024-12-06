import { AuthService } from 'src/app/services/auth.service';
import { JuegoService } from './../../services/juego.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {

  tarjeta: number[][];
  numeroSorteado: number;
  sesiones: any[] = [];

  constructor(private juegoService: JuegoService,
    private authService: AuthService,
    private router: Router
  ) {}

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
        //this.tarjeta = datos.tarjeta;
      });
  }

  marcarNumero(i: number, j: number, num: number) {
    if (num !== this.numeroSorteado) {
      alert('El número no coincide con el último número sorteado.');
      return;
    }

    this.juegoService.marcarNumero(i, j, this.numeroSorteado, this.tarjeta).subscribe({
      next: (nuevaTarjeta) => {
        this.tarjeta = nuevaTarjeta; // Actualiza la matriz con la respuesta del backend
      },
      error: () => {
        alert('No se pudo marcar el número. Inténtalo nuevamente.');
      }
    });
  }

  reiniciarEstadoLocal() {
    this.tarjeta = [];
    this.numeroSorteado = 0;
    this.sesiones = [];
  }

  validarBingo() {
    this.juegoService.validarBingo(this.tarjeta).subscribe(
      (respuesta) => {
        if(respuesta.ganador) {
          alert(respuesta.mensaje);
          this.juegoService.reiniciarBombo().subscribe(() => {
            this.reiniciarEstadoLocal();
            this.router.navigate(['/home']);
          })
        } else {
          alert(respuesta.mensaje);
        }
      },
      (error) => {
        console.error('Error al validar bingo: ', error)
        alert('Error al validar, intenta de nuevo');
      }
    );
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
