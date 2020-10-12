import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {ProductslistComponent} from './products/productslist/productslist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: '/home' },
  { path:'home',component: HomeComponent },
  { path:'services', component: ServicesComponent },
  { path:'products/:category', component: ProductslistComponent },
  { path:'products', component: ProductsComponent },
  { path:'aboutus', component:AboutusComponent },
  { path:'contactus', component:ContactusComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }