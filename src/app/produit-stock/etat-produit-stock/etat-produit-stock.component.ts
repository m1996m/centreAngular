import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { ProduitService } from '../../services/produit.service';
import { ProduitStockService } from '../../services/produit-stock.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-etat-produit-stock',
  templateUrl: './etat-produit-stock.component.html',
  styleUrls: ['./etat-produit-stock.component.css']
})
export class EtatProduitStockComponent implements OnInit {

  produitStocks:any;
  stock:any;
  form:any;
  isTrue:boolean=true;
  produits:any;
  stocks:any;
  constructor(private stockService:StockService,private produitService:ProduitService, private produitStockServiece: ProduitStockService,private router:Router) { }

  ngOnInit(): void {
    this.getType();
  }

  getproduitStock(form:NgForm){
    this.isTrue=false;
    this.produitStockServiece.getEtat(form.value).subscribe((data:any)=>{this.produitStocks=data;console.log(this.produitStocks)})
  }
  getType(){
    this.stockService.getAllstock().subscribe((data:any)=>{this.stocks=data})
  }

  getIsTrue(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
  }

  getColor(total:number): string{
    if(total<=10){
      return "red";
    }else if(total<=20){
      return "yellow"
    }else{
      return "green";
    }
  }

}
