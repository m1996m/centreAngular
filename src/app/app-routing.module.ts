import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'centre', loadChildren: () => import('./centre/centre.module').then(m => m.CentreModule) },
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
  { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
  { path: 'produit/stock', loadChildren: () => import('./produit-stock/produit-stock.module').then(m => m.ProduitStockModule) },
  { path: 'type/produit', loadChildren: () => import('./typeProduit/type-produit.module').then(m => m.TypeProduitModule) },
  { path: 'fournisseur', loadChildren: () => import('./fournisseur/fournisseur.module').then(m => m.ForunisseurModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
