import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { VenteRoutingModule } from './vente-routing.module';
import { VenteCreateComponent } from './vente-create/vente-create.component';
import { VenteEditComponent } from './vente-edit/vente-edit.component';
import { VenteShowComponent } from './vente-show/vente-show.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VenteCreateComponent,
    VenteEditComponent,
    VenteShowComponent,
  ],
  imports: [
    CommonModule,
    VenteRoutingModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
  ]
})
export class VenteModule { }
