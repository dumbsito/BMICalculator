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
    this.resultado="Over weight"
    this.interpretacion="You have a higher than normal body weight. try to exercise more."
  }else if(this.bmi>=19){
    this.resultado="Normal"
    this.interpretacion="You have a normal body weight. Nice job."
  }else{
    this.resultado="Under weight"
    this.interpretacion="You have a lower body weight than normal. you can eat a little more."
  }

  }

  Calcular(){
    this.router.navigate([""])
  }
}
