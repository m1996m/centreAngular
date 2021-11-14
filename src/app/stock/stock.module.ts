import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { StockShowComponent } from './stock-show/stock-show.component';
import { StockComponent } from './stock.component';




@NgModule({
  declarations: [
    StockComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    StockCreateComponent,
    StockEditComponent,
    StockShowComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class StockModule { }
