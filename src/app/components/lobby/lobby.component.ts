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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.iniciarContador();
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
}
