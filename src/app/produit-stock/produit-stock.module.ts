import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProduitStockRoutingModule } from './produit-stock-routing.module';
import { ProduitStockCreateComponent } from './produit-stock-create/produit-stock-create.component';
import { ProduitStockShowComponent } from './produit-stock-show/produit-stock-show.component';
import { ProduitStockEditComponent } from './produit-stock-edit/produit-stock-edit.component';
import { EtatProduitStockComponent } from './etat-produit-stock/etat-produit-stock.component';


@NgModule({
  declarations: [
    ProduitStockCreateComponent,
    ProduitStockShowComponent,
    ProduitStockEditComponent,
    EtatProduitStockComponent,
  ],
  imports: [
    CommonModule,
    ProduitStockRoutingModule,
    FormsModule,
  ],
})
export class ProduitStockModule { }
