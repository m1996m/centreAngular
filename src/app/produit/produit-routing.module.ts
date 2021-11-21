import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit.component';
import { ProduitCreateComponent } from './produit-create/produit-create.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitShowComponent } from './produit-show/produit-show.component';

const routes: Routes = [
  { path: '', component: ProduitComponent },
  { path: 'create', component: ProduitCreateComponent },
  { path: 'edit/:id', component: ProduitEditComponent },
  { path: 'show/:id', component: ProduitShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
