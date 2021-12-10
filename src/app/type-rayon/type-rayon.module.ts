import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TypeRayonRoutingModule } from './type-rayon-routing.module';
import { TypeRayonCreateComponent } from './type-rayon-create/type-rayon-create.component';
import { TypeRayonEditComponent } from './type-rayon-edit/type-rayon-edit.component';
import { TypeRayonShowComponent } from './type-rayon-show/type-rayon-show.component';

@NgModule({
  declarations: [
    TypeRayonCreateComponent,
    TypeRayonEditComponent,
    TypeRayonShowComponent
  ],
  imports: [
    CommonModule,
    TypeRayonRoutingModule,
    FormsModule,
  ],
})
export class TypeRayonModule { }
