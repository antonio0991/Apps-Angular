import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { HomeComponent } from './home/home.component'; 
import { Bin2DecComponent } from './bin2-dec/bin2-dec.component'; 
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component'; // Add this

const routes: Routes = [
  { path: '', component: HomeComponent },             
  { path: 'bin2dec', component: Bin2DecComponent },
  { path: 'border-radius', component: BorderRadiusPreviewerComponent },          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppRoutingModule { }
