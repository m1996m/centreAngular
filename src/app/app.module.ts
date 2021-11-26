import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CentreService } from './services/centre.service';
import { ClientCentreService } from './services/client-centre.service';
import { ClientService } from './services/client.service';
import { FourniseurCentreService } from './services/fourniseur-centre.service';
import { FournisseurService } from './services/fournisseur.service';
import { ProduitService } from './services/produit.service';
import { ProduitStockService } from './services/produit-stock.service';
import { RayonService } from './services/rayon.service';
import { StockService } from './services/stock.service';
import { TypeProduitService } from './services/type-produit.service';
import { TypeRayonService } from './services/type-rayon.service';
import { UserService } from './services/user.service';
import { VenteService } from './services/vente.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitStockComponent } from './produit-stock/produit-stock.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockComponent,
    ProduitComponent,
    ProduitStockComponent,
    FournisseurComponent,
    ClientComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CentreService,
    ClientCentreService,
    ClientService,
    FourniseurCentreService,
    FournisseurService,
    ProduitService,
    ProduitStockService,
    RayonService,
    StockService,
    TypeProduitService,
    TypeRayonService,
    UserService,
    VenteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
