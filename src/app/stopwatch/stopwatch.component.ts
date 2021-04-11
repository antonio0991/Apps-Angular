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
  horas: number;
  temposVoltas:string[] = [];
  clock: NodeJS.Timeout;
  isStarted: boolean;

  ngOnInit(): void {
    this.minutos = 0;
    this.segundos = 0;
    this.horas = 0;
  }

  start(){
    this.isStarted = true;
    this.clock = setInterval(() => this.rollClock()
    , 1000);
  }

  rollClock(){
    this.segundos++;
    if(this.segundos == 60){
      this.segundos = 0;
      this.minutos++;
    }
    if(this.minutos == 60){
      this.minutos = 0;
      this.horas++;
    }
  }

  stop(){
    this.isStarted = false;
    clearInterval(this.clock);
  }

  saveLap(){
    this.temposVoltas.push(this.getTime());
  }

  reset(){
    this.segundos = this.minutos = this.horas = 0;
    this.stop();
  }

  toStringWithLeadingZero(num: number): String{
    if(num >= 10){
      return "" + num;
    }
    return "0" + num;
  }

  clearLaps(){
    this.temposVoltas = [];
  }

  getTime(){
    return this.toStringWithLeadingZero(this.horas) + ":" + this.toStringWithLeadingZero(this.minutos) + ":" + this.toStringWithLeadingZero(this.segundos);
  }

}
