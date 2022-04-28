import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ruteo:Router) { }

  ngOnInit(): void {
  }

  redirigirLogin(){
    this.ruteo.navigateByUrl('login')
  }

  redirigirRegistro(){
    this.ruteo.navigateByUrl('registro')
  }
  redirigirQuienSoy(){
    this.ruteo.navigateByUrl('quien-soy')
  }

  redirigirJuegos(){
    this.ruteo.navigateByUrl('juegos')
  }
}
