import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenteComponent } from './vente.component';
import { VenteCreateComponent } from './vente-create/vente-create.component';
import { VenteShowComponent } from './vente-show/vente-show.component';
import { VenteEditComponent } from './vente-edit/vente-edit.component';
import { NavbarComponent } from '../navbar/navbar.component';


const routes: Routes = [
  { path: '', component: VenteComponent },
  { path: 'create', component: VenteCreateComponent },
  { path: 'edit/:id', component:  VenteEditComponent},
  { path: 'show/:id', component: VenteShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
