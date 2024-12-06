import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { SalaComponent } from './components/sala/sala.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SessionTableComponent } from './components/session-table/session-table.component';
import { JwtInterceptor } from './jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LobbyComponent,
    SalaComponent,
    LoginComponent,
    SessionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
