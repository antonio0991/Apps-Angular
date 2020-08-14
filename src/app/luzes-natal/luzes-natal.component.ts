import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luzes-natal',
  templateUrl: './luzes-natal.component.html',
  styleUrls: ['./luzes-natal.component.css']
})
export class LuzesNatalComponent implements OnInit {

  luzes: Array<HTMLElement>;
  ligado: boolean;

  //Eu ainda não entendi qual é essa mania do typescript de mudar o nome das coisas
  //podia muito bem ser int e const mas NAAAAAAO vamo mudar pra number e readonly
  //olha britto sinceramente...
  intervalo: number;
  readonly TAMANHO_LUZES: number = 7;

  constructor() { }

  ngOnInit(): void {
    this.luzes = [
    <HTMLInputElement>document.getElementById("l0"),
    <HTMLInputElement>document.getElementById("l1"),
    <HTMLInputElement>document.getElementById("l2"),
    <HTMLInputElement>document.getElementById("l3"),
    <HTMLInputElement>document.getElementById("l4"),
    <HTMLInputElement>document.getElementById("l5"),
    <HTMLInputElement>document.getElementById("l6"),
    <HTMLInputElement>document.getElementById("l7")
    ]
    this.ligado = false;
    this.intervalo = 500;
  }

  isOn(){
    if(this.ligado)
      return "On";
    return "Off" ;
  }

  btnOnClick(){
    if(!this.ligado){
      this.ligado = true;
      this.loop();
    }
    else{
      this.ligado = false;
    }
  }

  setIntervalo(){
  this.intervalo = parseInt((<HTMLInputElement>document.getElementById("intervalo")).value);
  }

  async loop(){
    var cont = 0;
    var corAtual: string;
    var corAnterior: string;
    while(this.ligado){
      this.setIntervalo();
      //Acender luz atual (opacidade)
      corAtual = this.luzes[cont].style.backgroundColor;
      corAtual.replace("0);", "1);");
      this.luzes[cont].style.backgroundColor = corAtual;
      this.luzes[cont].style.opacity = "1";

      //Apagar luz anterior
      if(cont == 0){
        corAnterior = this.luzes[this.TAMANHO_LUZES].style.backgroundColor;
        corAnterior.replace("1);", "0);");
        this.luzes[this.TAMANHO_LUZES].style.backgroundColor = corAnterior;
        this.luzes[this.TAMANHO_LUZES].style.opacity = "0.3";
        cont++;
      }
      else{
        corAnterior = this.luzes[cont-1].style.backgroundColor;
        corAnterior.replace("1);", "0);");
        this.luzes[cont-1].style.backgroundColor = corAnterior;
        this.luzes[cont-1].style.opacity = "0.3";
        cont++;
      }

      //Voltar ao começo
      if(cont == this.luzes.length){
        cont=0;
      }

      //Tempo entre a luz atual e a próxima
      await(this.delay(this.intervalo));
    }

    //Apagar luz anterior depois de desligar
    corAnterior = this.luzes[cont-1].style.backgroundColor;
    corAnterior.replace("1);", "0);");
    this.luzes[cont-1].style.backgroundColor = corAnterior;
    this.luzes[cont-1].style.opacity = "0.3";

    cont = 0;
  }
  
  //função delay com suporte a promisse.
  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}
