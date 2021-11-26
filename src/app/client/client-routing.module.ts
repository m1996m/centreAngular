import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';


const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'create', component: ClientCreateComponent },
  { path: 'edit/:id', component: ClientEditComponent },
  { path: 'show/:id', component: ClientShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
