import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.css']
})
export class BorderRadiusPreviewerComponent implements OnInit {

  borderRadius : string = '';
  topL : string = '0px';
  topR : string = '0px';
  bottomL : string = '0px';
  bottomR : string = '0px';

  constructor() { }
    onKeyup(event:KeyboardEvent){
  }

  onSave(){
    this.topL = (<HTMLInputElement>document.getElementById("Top-left")).value; 
    this.topR = (<HTMLInputElement>document.getElementById("Top-right")).value; 
    this.bottomL = (<HTMLInputElement>document.getElementById("Bottom-left")).value; 
    this.bottomR = (<HTMLInputElement>document.getElementById("Bottom-right")).value; 
    this.borderRadius = this.topL + " " + this.topR + " " + this.bottomL + " " + this.bottomR;
  }

  ngOnInit() {
  }

}