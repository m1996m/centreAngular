import { Component, OnInit } from '@angular/core';
import { ProduitStockModel } from '../../Models/produit-stock-model.Model';
import { FournisseurModel } from '../../Models/fournisseur-model.Model';
import { StockService } from '../../services/stock.service';
import { ProduitStockService } from '../../services/produit-stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from '../../services/fournisseur.service';
import { ProduitService } from '../../services/produit.service';
import { NgForm } from '@angular/forms';
import { ProduitModel } from '../../Models/produit-model.Model';

@Component({
  selector: 'app-produit-stock-edit',
  templateUrl: './produit-stock-edit.component.html',
  styleUrls: ['./produit-stock-edit.component.css']
})
export class ProduitStockEditComponent implements OnInit {

  produitStock:any;
  fournisseur:any;
  form:any;
  dataTel:any;
  produits:any;
  fournisseurs:any;
  isTrue:boolean=true;
  stocks:any;
  id:number=0;
  dataproduit:any;
  constructor(private stockService:StockService, private produitStockService:ProduitStockService,private activatedRoute:ActivatedRoute,private router:Router,private fournisseuService:FournisseurService,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.getProduit();
    this.getFournisseur();
    this.getStock();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneProduit();
  }

  Enregistrer(form:NgForm){
    this.produitStockService.editProduitStock(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/produit/stock'])});
  }
  getOneProduit(){
    this.produitStockService.getOneProduitStock(this.id).subscribe((data:any)=>{
      this.produitStock=data;
      this.dataproduit=data;
    });
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

  getStock(){
    this.stockService.getAllstock().subscribe((data:any)=>{this.stocks=data;});
  }

}
