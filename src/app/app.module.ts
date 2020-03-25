import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule,CarouselModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductSpecificationComponent } from './components/product-specification/product-specification.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http'
import { UsersServiceService } from './services/users-service.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    ProductsComponent,
    ProductComponent,
    PageNotFoundComponent,
    ProductSpecificationComponent,
    LoginFormComponent,
    NavBarComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(), 
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    UsersServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
