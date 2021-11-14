import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { InscriptionComponent } from '../inscription/inscription.component';


@NgModule({
  declarations: [
    LoginComponent,
    InscriptionComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
