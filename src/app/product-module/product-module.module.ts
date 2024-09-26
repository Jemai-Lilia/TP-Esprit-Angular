import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from '../product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule
  ]
})
export class ProductModuleModule { }
