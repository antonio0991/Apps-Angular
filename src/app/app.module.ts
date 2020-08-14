import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Bin2DecComponent } from './bin2-dec/bin2-dec.component';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';
import { LuzesNatalComponent } from './luzes-natal/luzes-natal.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, Bin2DecComponent, BorderRadiusPreviewerComponent, HomeComponent, CalculadoraComponent, TrueOrFalseComponent, LuzesNatalComponent, StopwatchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
