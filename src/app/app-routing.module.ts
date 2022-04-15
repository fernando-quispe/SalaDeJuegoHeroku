import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent} from './page/juegos/juegos.component';
import { LoginComponent} from './page/login/login.component';
import { NotFoundComponent} from './page/not-found/not-found.component';
import { AhorcadoComponent} from './page/ahorcado/ahorcado.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { HomeComponent} from './page/home/home.component';
import { PreguntadosComponent} from './page/preguntados/preguntados.component';
import { MayorOMenorComponent} from './page/mayor-o-menor/mayor-o-menor.component';
import { SimonDiceComponent } from './page/simon-dice/simon-dice.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},

  { path:'login', component:LoginComponent},

  { path:'quien-soy', component:QuienSoyComponent},

  { path:'juegos', component:JuegosComponent, children: [
    { path:'ahorcado', component:AhorcadoComponent},
    { path:'mayor-o-menor', component:MayorOMenorComponent},
    { path:'preguntados', component:PreguntadosComponent}, 
    { path:'simon-dice', component:SimonDiceComponent}, 

    { path:'**', component:NotFoundComponent }
    ]
  },
  //{ path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
