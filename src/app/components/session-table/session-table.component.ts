import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent {

  sesiones: any[] = [];

  constructor(private sesionService: SessionService) {}

  ngOnInit(): void {
    this.cargarSesiones();
  }

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
  }
}
