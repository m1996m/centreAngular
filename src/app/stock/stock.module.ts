import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StockRoutingModule } from './stock-routing.module';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { StockShowComponent } from './stock-show/stock-show.component';


@NgModule({
  declarations: [
    StockCreateComponent,
    StockEditComponent,
    StockShowComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StockModule { }
