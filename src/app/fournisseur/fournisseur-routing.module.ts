import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur.component';
import { FournisseurCreateComponent } from './fournisseur-create/fournisseur-create.component';
import { FournisseurEditComponent } from './fournisseur-edit/fournisseur-edit.component';
import { FournisseurShowComponent } from './fournisseur-show/fournisseur-show.component';

const routes: Routes = [
  { path: '', component: FournisseurComponent },
  { path: 'create', component: FournisseurCreateComponent },
  { path: 'edit/:id', component: FournisseurEditComponent },
  { path: 'show/:id', component: FournisseurShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
