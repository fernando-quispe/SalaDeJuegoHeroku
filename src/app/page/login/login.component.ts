import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email: '',
    password:''
  }

  //constructor(public ruteo:Router) {
//  }

  constructor(private authService: AuthService){

  }

  Ingresar(){
    console.log(this.usuario);
    const{email, password} = this.usuario;
    this.authService.register(email,password).then(res => {
    console.log("Se registro: ",res);
    })
  }


  ngOnInit(): void {
  }
/*
  Entrar() {
    this.auth.login(this.email, this.password)
      .then(res => {
        this.ruteo.navigateByUrl('home');
      })
      .catch(error => {
        this.logeando =true;
        this.toast.error("Los datos son incorrectos o no existe el usuario");
        this.progreso=0;
        this.ProgresoDeAncho="0%";
      })
  }*/



//  redirigir(){
 //   this.ruteo.navigateByUrl('home')
//  }
}
