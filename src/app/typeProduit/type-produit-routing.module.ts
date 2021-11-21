import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeProduitIndexComponent } from './type-produit-index/type-produit-index.component';
import { TypeProduitCreateComponent } from './type-produit-create/type-produit-create.component';
import { TypeProduitEditComponent } from './type-produit-edit/type-produit-edit.component';
import { TypeProduitShowComponent } from './type-produit-show/type-produit-show.component';



const routes: Routes = [
  { path: '', component: TypeProduitIndexComponent },
  { path: 'create', component: TypeProduitCreateComponent },
  { path: 'edit/:id', component: TypeProduitEditComponent },
  { path: 'show/:id', component: TypeProduitShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeProduitRoutingModule { }
