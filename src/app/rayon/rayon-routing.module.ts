import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RayonComponent } from './rayon.component';
import { RayonCreateComponent } from './rayon-create/rayon-create.component';
import { RayonEditComponent } from './rayon-edit/rayon-edit.component';
import { RayonShowComponent } from './rayon-show/rayon-show.component';
import { RayonEtatComponent } from './rayon-etat/rayon-etat.component';


const routes: Routes = [
  { path: '', component: RayonComponent },
  { path: 'create', component: RayonCreateComponent },
  { path: 'edit/:id', component: RayonEditComponent },
  { path: 'show/:id', component: RayonShowComponent },
  { path: 'etat', component: RayonEtatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RayonRoutingModule { }
