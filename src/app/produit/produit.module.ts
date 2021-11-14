import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProduitIndexComponent } from './produit-index/produit-index.component';
import { ProduitShowComponent } from './produit-show/produit-show.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitComponent } from './produit.component';



@NgModule({
  declarations: [
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProduitIndexComponent,
    ProduitShowComponent,
    ProduitEditComponent,
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class ProduitModule { }
