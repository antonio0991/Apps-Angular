import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.css']
})
export class TrueOrFalseComponent implements OnInit {

  constructor() { }

  expressao: string = '';
  string1: string = '';
  string2: string = '';

  ngOnInit(): void {
  }

  onSave(valor:string){
    /*if(this.ehBinario()){
      this.decimal = 0;
      this.inversa = this.binario.split("").reverse().join("");
      for(let i = 0; i<this.inversa.length; i++){
        if(this.inversa.charAt(i) == '1'){
          this.decimal += 2**i;
        }
      }
      this.binario = this.inversa;
      }*/
  }

  onKeyup(event:KeyboardEvent){
    console.log(this.string1);
    console.log(this.string2);
    console.log(this.expressao);
    console.log(this.evaluate());
    this.string1 = (<HTMLInputElement>document.getElementById("string1")).value;
    this.string2 = (<HTMLInputElement>document.getElementById("string2")).value;
    this.expressao = (<HTMLInputElement>document.getElementById("operacao")).value;
  }

  evaluate(): boolean{
    var resultado: boolean = false;
    switch(this.expressao){
      case "==":
        if(this.string1 == this.string2){
          resultado = true;
        }
        break;
      case "!=":
        if(this.string1 != this.string2){
          resultado = true;
        }
        break;
      case '>':
        if(this.string1 > this.string2){
          resultado = true;
        }
        break;
      case '>=':
        if(this.string1 >= this.string2){
          resultado = true;
        }
        break;
      case '<':
        if(this.string1 < this.string2){
          resultado = true;
        }
        break;
      case '<=':
        if(this.string1 <= this.string2){
          resultado = true;
        }
        break;
    }
    return resultado;
  }

}
