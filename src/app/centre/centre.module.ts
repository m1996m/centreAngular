import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentreRoutingModule } from './centre-routing.module';
import { CentreComponent } from './centre.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { CentreIndexComponent } from './centre-index/centre-index.component';
import { CentreEditComponent } from './centre-edit/centre-edit.component';
import { CentreShowComponent } from './centre-show/centre-show.component';


@NgModule({
  declarations: [
    CentreComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CentreIndexComponent,
    CentreEditComponent,
    CentreShowComponent
  ],
  imports: [
    CommonModule,
    CentreRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class CentreModule { }
