import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajosRoutingModule } from './trabajos-routing.module';
import { TrabajosComponent } from './trabajos.component';


@NgModule({
  declarations: [
    TrabajosComponent
  ],
  imports: [
    CommonModule,
    TrabajosRoutingModule
  ]
})
export class TrabajosModule { }
