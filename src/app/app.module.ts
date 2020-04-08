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
import { HttpClientModule, HttpParams } from '@angular/common/http'
import { UsersServiceService } from './services/users-service.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './services/auth-guard.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RegisterComponent } from './components/register/register.component';

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
    SearchBoxComponent,
    AdminPageComponent,
    PaginationComponent,
    RegisterComponent
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
    AlertModule.forRoot(), 
    RatingModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    UsersServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
