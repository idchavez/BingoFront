import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.message = response.message;
        console.log("Token JWT:", response.jwt);
        localStorage.setItem('jwt', response.jwt);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        this.message = "Error en el login: " + (err.error?.message || err.message);
       }
    });

  }
}
