import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitStockComponent } from './produit-stock.component';
import { ProduitStockCreateComponent } from './produit-stock-create/produit-stock-create.component';
import { ProduitStockEditComponent } from './produit-stock-edit/produit-stock-edit.component';
import { ProduitStockShowComponent } from './produit-stock-show/produit-stock-show.component';

const routes: Routes = [
  { path: '', component: ProduitStockComponent },
  { path: 'create', component: ProduitStockCreateComponent },
  { path: 'edit/:id', component: ProduitStockEditComponent },
  { path: 'show/:id', component: ProduitStockShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitStockRoutingModule { }
