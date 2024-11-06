import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { ProductQPCategoryComponentComponent } from './product-qpcategory-component/product-qpcategory-component.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"home", component:HomeComponent, children:[
    {path:"category/:id", component:DetailsComponent}
]},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"test", component:TestComponent},
  //pathParam
  {path:"details/:id", component:ProductsCategoryComponentComponent},
  //QuerParam
  {path:"details", component:ProductQPCategoryComponentComponent},
  {path:"products", component:ProductQPCategoryComponentComponent},
  {
    path:'contact',
    loadChildren:()=>import('./contact-module/contact-module.module').then(m=>m.ContactModuleModule)
  },
  {path:"addProduct", component: AddProductComponent},
  {path:"addReactive", component:AddProductReactiveComponent},
  {
    path:'apropos',
    loadChildren:()=>import('./apropos-module/apropos-module.module').then(m=>m.AproposModuleModule)
  },

  {
    path:'profil',
    loadChildren:()=>import('./profile-module/profile-module.module').then(m=>m.ProfileModuleModule)
  },

  {
    path:'contact',
    loadChildren:()=>import('./product-module/product-module.module').then(m=>m.ProductModuleModule)
  },
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
