import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})

export class JuegosComponent implements OnInit {

  constructor(public ruteo:Router) { }

  ngOnInit(): void {
  }

  redirigirAhorcado(){
    this.ruteo.navigateByUrl('juegos/ahorcado')
  }

  redirigirMayorOMenor(){
    this.ruteo.navigateByUrl('juegos/mayor-o-menor')
  }

  redirigirPreguntados(){
    this.ruteo.navigateByUrl('juegos/preguntados')
  }

  redirigirSimonDice(){
    this.ruteo.navigateByUrl('juegos/simon-dice')
  }
}
