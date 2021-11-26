import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent }, 
  {path: 'inscription', component: InscriptionComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
