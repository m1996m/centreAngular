import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit.component';
import { ProduitIndexComponent } from './produit-index/produit-index.component';
import { ProduitShowComponent } from './produit-show/produit-show.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';


const routes: Routes = [
  { path: '', component: ProduitIndexComponent },
  { path: 'create', component: ProduitComponent },
  { path: 'show/:id', component: ProduitShowComponent },
  { path: 'edit/:id', component: ProduitEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
