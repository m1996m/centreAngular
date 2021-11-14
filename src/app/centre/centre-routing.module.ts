import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentreComponent } from './centre.component';
import { CentreIndexComponent } from './centre-index/centre-index.component';
import { CentreShowComponent } from './centre-show/centre-show.component';
import { CentreEditComponent } from './centre-edit/centre-edit.component';

const routes: Routes = [
  { path: '', component: CentreIndexComponent },
  { path: 'create', component: CentreComponent },
  { path: 'edit/:id', component: CentreEditComponent },
  { path: 'show/:id', component: CentreShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreRoutingModule { }
