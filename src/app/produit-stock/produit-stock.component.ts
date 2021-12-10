import { Component, OnInit } from '@angular/core';
import { ProduitStockService } from '../services/produit-stock.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProduitService } from '../services/produit.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-produit-stock',
  templateUrl: './produit-stock.component.html',
  styleUrls: ['./produit-stock.component.css']
})
export class ProduitStockComponent implements OnInit {

  produitStocks:any;
  stockshearches:any;
  form:any;
  isTrue:boolean=true;
  produits:any;
  stocks:any;
  constructor(private type:StockService,private produitService:ProduitService, private produitStockServiece: ProduitStockService,private router:Router) { }

  ngOnInit(): void {
    this.getProduit();
    this.getType();
    this.getproduitStock();
  }

  getproduitStock(){
    this.produitStockServiece.getAllProduitStock().subscribe((data:any)=>{this.produitStocks=data})
  }
  getProduit(){
    this.produitService.getAllproduit().subscribe((data:any)=>{this.produits=data})
  }
  getType(){
    this.type.getAllstock().subscribe((data:any)=>{this.stocks=data})
  }
  getSearch(form:NgForm){
    this.isTrue=false;
    this.produitStockServiece.getSearch(form.value).subscribe((data:any)=>{ 
      this.stockshearches=data;
    });
  }
  getIsTrue(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
  }

}
