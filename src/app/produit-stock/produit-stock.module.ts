import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProduitStockComponent } from './produit-stock.component';
import { ProduitStockRoutingModule } from './produit-stock-routing.module';
import { ProduitStockEditComponent } from './produit-stock-edit/produit-stock-edit.component';
import { ProduitStockShowComponent } from './produit-stock-show/produit-stock-show.component';




@NgModule({
  declarations: [
    ProduitStockComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProduitStockEditComponent,
    ProduitStockShowComponent,
  ],
  imports: [
    CommonModule,
    ProduitStockRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class ProduitStockModule { }
