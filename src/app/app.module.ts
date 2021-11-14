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
import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { TypeProduitCreateComponent } from './typeProduit/type-produit-create/type-produit-create.component';
import { TypeProduitIndexComponent } from './typeProduit/type-produit-index/type-produit-index.component';
import { TypeProduitShowComponent } from './typeProduit/type-produit-show/type-produit-show.component';
import { TypeProduitEditComponent } from './typeProduit/type-produit-edit/type-produit-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    TypeProduitCreateComponent,
    TypeProduitIndexComponent,
    TypeProduitShowComponent,
    TypeProduitEditComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
