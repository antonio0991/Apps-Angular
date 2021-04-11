import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin2-dec',
  templateUrl: './bin2-dec.component.html',
  styleUrls: ['./bin2-dec.component.css']
})
export class Bin2DecComponent implements OnInit {

  constructor() { }
  
  isMouseOver = false;

  binario : string = '';
  decimal : number = 0;
  inversa : string = '';

  onKeyup(event:KeyboardEvent){
    this.binario = (<HTMLInputElement>event.target).value;
  }

  onSave(valor:string){
      if(this.ehBinario()){
      this.decimal = 0;
      this.inversa = this.binario.split("").reverse().join("");
      for(let i = 0; i<this.inversa.length; i++){
        if(this.inversa.charAt(i) == '1'){
          this.decimal += 2**i;
        }
      }
      this.binario = this.inversa;
      }
    }

  ehBinario(){
    var ehBinario = true;
    for(let i = 0; i<this.binario.length; i++){
      if(this.binario.charAt(i) != '0' && this.binario.charAt(i) != '1'){
        ehBinario = false;
      }
    }
    return ehBinario;
  }
  
  ngOnInit() {
  }

}