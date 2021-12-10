import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RayonRoutingModule } from './rayon-routing.module';
import { RayonCreateComponent } from './rayon-create/rayon-create.component';
import { RayonEditComponent } from './rayon-edit/rayon-edit.component';
import { RayonShowComponent } from './rayon-show/rayon-show.component';
import { RayonEtatComponent } from './rayon-etat/rayon-etat.component';



@NgModule({
  declarations: [
    RayonCreateComponent,
    RayonEditComponent,
    RayonShowComponent,
    RayonEtatComponent
  ],
  imports: [
    CommonModule,
    RayonRoutingModule,
    FormsModule,
  ],
})
export class RayonModule { }
