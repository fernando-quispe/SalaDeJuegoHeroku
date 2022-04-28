import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { MayorOMenorComponent } from './page/mayor-o-menor/mayor-o-menor.component';
import { SimonDiceComponent } from './page/simon-dice/simon-dice.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    NotFoundComponent,
    JuegosComponent,
    AhorcadoComponent,
    PreguntadosComponent,
    MayorOMenorComponent,
    SimonDiceComponent,
    RegistroComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
