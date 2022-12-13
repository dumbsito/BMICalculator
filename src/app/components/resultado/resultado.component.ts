import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
bmi:number
resultado:string=""
interpretacion:string=""
  constructor(private route:ActivatedRoute, private router:Router){
  this.bmi= +route.snapshot.paramMap.get("valor")!
  }

  ngOnInit(): void {
   
  if(this.bmi>=25){
    this.resultado="Exceso de peso"
    this.interpretacion="Tienes un peso corporal superior al normal. Intente hacer mas ejercicio"
  }else if(this.bmi>=19){
    this.resultado="Normal"
    this.interpretacion="Tienes un peso corporal normal. Buen trabajo."
  }else{
    this.resultado="Bajo peso"
    this.interpretacion="Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas"
  }

  }

  Calcular(){
    this.router.navigate([""])
  }
}
