import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRayonComponent } from './type-rayon.component';
import { TypeRayonCreateComponent } from './type-rayon-create/type-rayon-create.component';
import { TypeRayonEditComponent } from './type-rayon-edit/type-rayon-edit.component';
import { TypeRayonShowComponent } from './type-rayon-show/type-rayon-show.component';


const routes: Routes = [
  { path: '', component: TypeRayonComponent },
  { path: 'create', component: TypeRayonCreateComponent },
  { path: 'edit/:id', component: TypeRayonEditComponent },
  { path: 'show/:id', component: TypeRayonShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRayonRoutingModule { }
