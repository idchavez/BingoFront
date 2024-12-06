import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { SalaComponent } from './components/sala/sala.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {path: 'lobby', component: LobbyComponent, canActivate: [authGuard]},
  {path: 'sala', component: SalaComponent, canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
