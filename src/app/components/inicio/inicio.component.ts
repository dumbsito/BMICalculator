import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {


  constructor(private router:Router){

  }
  peso:number=60
  edad:number=25
  altura:number=170
  genero:string=""

 
  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}


cambiarAltura(e:any){
this.altura=e.target.value;
}
setMasculino(){
 this.genero="masculino"

}
setFemenino(){
  this.genero="femenino"
 
}
calcular(){

  let total=(this.peso/Math.pow(this.altura/100,2)).toFixed(1)
 
  this.router.navigate(["resultado", total])
  
 
}
}

