import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeProduitRoutingModule } from './type-produit-routing.module';
import { TypeProduitCreateComponent } from './type-produit-create/type-produit-create.component';
import { TypeProduitIndexComponent } from './type-produit-index/type-produit-index.component';
import { TypeProduitShowComponent } from './type-produit-show/type-produit-show.component';
import { TypeProduitEditComponent } from './type-produit-edit/type-produit-edit.component';



@NgModule({
  declarations: [
    TypeProduitCreateComponent,
    TypeProduitIndexComponent,
    TypeProduitShowComponent,
    TypeProduitEditComponent,
  ],
  imports: [
    CommonModule,
    TypeProduitRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class TypeProduitModule { }
