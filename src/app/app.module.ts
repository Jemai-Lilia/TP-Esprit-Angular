import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ProductQPCategoryComponentComponent } from './product-qpcategory-component/product-qpcategory-component.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';

@NgModule({
  declarations: [
    //liste des composants pipe et directives créer
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundComponent,
    TestComponent,
    ProductQPCategoryComponentComponent,
    ProductsCategoryComponentComponent,
    DetailsComponent,
    AddProductComponent,
    AddProductReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//template driven form
    ReactiveFormsModule //template reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
