import { NgModule } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ProductslistComponent, ProductdetailsComponent } from './products/productslist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

import { SendEmailService } from './service/mail/send-email.service';
import { MaterialModule } from './materialmodule/materialmodule.module';
import { CountToCounterDirective } from './Directives/count-to-counter.directive';
import { ProductsgridComponent } from './products/productsgrid/productsgrid.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ProductslistComponent,
    AboutusComponent,
    ProductdetailsComponent,
    ContactusComponent,
    FooterComponent,
    CountToCounterDirective,
    ProductsComponent,
    ProductsgridComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [SendEmailService],
  bootstrap: [AppComponent],
  entryComponents: [ProductdetailsComponent]
})
export class AppModule { }
