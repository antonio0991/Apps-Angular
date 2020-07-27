import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  operacao: string = '';
  temp1: string = '0';
  temp2: string = '0';
  display: number = 0

  constructor() { }

  ngOnInit(): void {
    
  }

  setValor1(num: number): void {
    this.valor1 = num;
  }

  setValor2(num: number): void{
    this.valor2 = num;
  }

  appendTemp1(num: string){
    if(this.temp1 == '0'){
      this.temp1 = '';
    }
    this.temp1 += num;
  }

  appendTemp2(num: string){
    if(this.temp2== '0'){
      this.temp2 = '';
    }
    this.temp2 += num;
  }

  setOperacao(operacao: string){
    this.operacao = operacao;
    this.valor1 = parseFloat(this.temp1);
  }

  setResultado(){
    this.valor2 = parseFloat(this.temp2);
    switch(this.operacao){
      case '+':
        this.resultado = this.valor1 + this.valor2;
        break;
      case '-':
        this.resultado = this.valor1 - this.valor2;
        break;
      case '*':
        this.resultado = this.valor1 * this.valor2;
        break;
      case '/':
        this.resultado = this.valor1 / this.valor2;
        break;
      default:
        break;
    }
    this.display = this.resultado;
    this.valor1 = this.resultado;
    }

  clear(){
    if(this.temp2 != '0'){
      this.temp2 = '0';
      this.valor2 = 0;
      this.display = parseFloat(this.temp2);
    }
    else if(this.operacao != ''){
      this.operacao = '';
      this.display = parseFloat(this.temp1);
    }
    else{
      this.temp1 = '0';
      this.valor1 = 0;
      this.display = parseFloat(this.temp1);
    }
  }

  clearAll(){
    this.temp1=this.temp2='0';
    this.operacao = '';
    this.display = this.resultado = this.valor1 = this.valor2 = 0;
  }

  appendNum(num: string){
    if(this.operacao != ''){
      this.appendTemp2(num);
      this.display = parseFloat(this.temp2);
    }
    else{
      this.appendTemp1(num);
      this.display = parseFloat(this.temp1);
    }
  }

  reverseSign(){
    this.display *= -1;
    if(this.temp1 != '0' && this.temp2 == '0'){
      this.temp1 = this.display.toString();
    }
    else if(this.temp2 != '0'){
      this.temp2 = this.display.toString();
    }
  }

}
