import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { SalaComponent } from './components/sala/sala.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'sala', component: SalaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
