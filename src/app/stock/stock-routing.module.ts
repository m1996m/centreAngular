import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { StockShowComponent } from './stock-show/stock-show.component';


const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'create', component: StockCreateComponent },
  { path: 'edit/:id', component: StockEditComponent },
  { path: 'show/:id', component: StockShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
