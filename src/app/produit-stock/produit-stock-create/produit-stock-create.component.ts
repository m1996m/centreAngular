import { Component, OnInit } from '@angular/core';
import { ProduitStockModel } from '../../Models/produit-stock-model.Model';
import { ProduitStockService } from '../../services/produit-stock.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurModel } from '../../Models/fournisseur-model.Model';
import { FournisseurService } from '../../services/fournisseur.service';
import { ProduitService } from '../../services/produit.service';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-produit-stock-create',
  templateUrl: './produit-stock-create.component.html',
  styleUrls: ['./produit-stock-create.component.css']
})
export class ProduitStockCreateComponent implements OnInit {

  produitStocks:ProduitStockModel=new ProduitStockModel(0,0,0,0);
  fournisseur:FournisseurModel=new FournisseurModel(0,'','','','','','','');
  form:any;
  dataTel:any;
  produits:any;
  fournisseurs:any;
  isTrue:boolean=true;
  stocks:any;
  dataproduit:any;
  constructor(private stockService:StockService, private produitStockService:ProduitStockService,private fb:FormBuilder,private router:Router,private fournisseuService:FournisseurService,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.getProduit();
    this.getFournisseur();
    this.getStock();
  }

  Enregistrer(form:NgForm){
    this.produitStockService.createProduitStock(form.value).subscribe((data:any)=>{this.router.navigate(['/produit/stock'])});
  }

  click(){
    this.isTrue=true;
  }

  getProduit(){
    this.produitService.getAllproduit().subscribe((data:any)=>{this.produits=data;});
  }
  getFournisseur(){
    this.fournisseuService.getAllFournisseur().subscribe((data:any)=>{
      this.fournisseurs=data;
    });
  }

  blurProduit(form:NgForm){
    this.produitService.getSearchID(form.value).subscribe((data:any)=>{
      this.dataproduit=data;console.log(this.dataproduit)});
    
  }

  getStock(){
    this.stockService.getAllstock().subscribe((data:any)=>{this.stocks=data;});
  }
}
