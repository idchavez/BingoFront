import { SessionService } from './../../services/session.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {

  contador: number = 60;
  interval: any;
  //sesiones: any[] = [];

  constructor(private router: Router,
    private sesionService: SessionService) {}

  ngOnInit(): void {
    this.iniciarContador();
    //this.cargarSesiones();
  }

  irASala() {
    this.router.navigate(['/sala']);
  }

  iniciarContador() {
    this.interval = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        clearInterval(this.interval);
        this.router.navigate(['/sala']);
      }
    }, 1000);
  }
  /*
  cargarSesiones(): void {
    this.sesionService.obtenerSesiones().subscribe(
      {
      next: (data) => {
         this.sesiones = data;
      },
      error: (err) => {
        console.error("Error cargando sesiones: ", err)
      }
    });
  }*/
}
