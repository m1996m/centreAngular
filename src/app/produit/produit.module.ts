import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitCreateComponent } from './produit-create/produit-create.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitShowComponent } from './produit-show/produit-show.component';


@NgModule({
  declarations: [
    ProduitCreateComponent,
    ProduitEditComponent,
    ProduitShowComponent,
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProduitModule { }
