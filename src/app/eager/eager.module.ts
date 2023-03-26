import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LandingComponent } from './landing/landing.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class EagerModule { }
