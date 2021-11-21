import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ProduitStockRoutingModule } from './produit-stock-routing.module';
import { ProduitStockCreateComponent } from './produit-stock-create/produit-stock-create.component';
import { ProduitStockShowComponent } from './produit-stock-show/produit-stock-show.component';
import { ProduitStockEditComponent } from './produit-stock-edit/produit-stock-edit.component';


@NgModule({
  declarations: [
    ProduitStockCreateComponent,
    ProduitStockShowComponent,
    ProduitStockEditComponent,
  ],
  imports: [
    CommonModule,
    ProduitStockRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProduitStockModule { }
