import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor() {}

  startStop: String;
  minutos: number;
  segundos: number;
  milissegundos: number;
  tempoUltimaVolta: number;
  temposVoltas:number[];
  isStarted: boolean;

  ngOnInit(): void {
    this.minutos = 0;
    this.segundos = 0;
    this.milissegundos = 0;
  }

  start(){
    while(this.isStarted){
      //Esperar 10 milissegundos
      new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 10);
      });
      this.milissegundos++;
      if(this.milissegundos == 100){
       this.segundos++;
       this.milissegundos = 0; 
      }
      if(this.segundos == 60){
        this.minutos++;
        this.segundos = 0;
      }
    }
  }

  stop(){

  }

  add10Ms(){

  }

  saveLap(){

  }

  getLaps(){

  }

  zerar(){

  }

}
