import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AproposModuleRoutingModule } from './apropos-module-routing.module';
import { AproposComponent } from '../apropos/apropos.component';


@NgModule({
  declarations: [
    AproposComponent
  ],
  imports: [
    CommonModule,
    AproposModuleRoutingModule
  ]
})
export class AproposModuleModule { }
