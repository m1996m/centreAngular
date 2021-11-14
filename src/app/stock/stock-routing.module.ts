import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from '../produit/produit.component';
import { StockComponent } from './stock.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockShowComponent } from './stock-show/stock-show.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';


const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'create', component: StockCreateComponent },
  { path: 'show/:id', component: StockShowComponent },
  { path: 'edit/:id', component: StockEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
