import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurCreateComponent } from './fournisseur-create/fournisseur-create.component';
import { FournisseurEditComponent } from './fournisseur-edit/fournisseur-edit.component';
import { FournisseurShowComponent } from './fournisseur-show/fournisseur-show.component';



@NgModule({
  declarations: [

  
    FournisseurCreateComponent,
        FournisseurEditComponent,
        FournisseurShowComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ForunisseurModule { }
