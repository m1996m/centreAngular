import { Component, OnInit } from '@angular/core';
import { ProduitStockService } from '../services/produit-stock.service';
import { TypeRayonService } from '../services/type-rayon.service';
import { RayonService } from '../services/rayon.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {

  rayons:any;
  produitStocks:any;
  form:any;
  isTrue:boolean=true;
  typeRayons:any;
  stocks:any;
  rayonShearshs:any;
  constructor(private produitService:ProduitService,private typeRayonService:TypeRayonService, private rayonServiece: RayonService,private router:Router) { }

  ngOnInit(): void {
    this.getProduit();
    this.getTypeRayon();
    this.getrayon();
  }

  getrayon(){
    this.rayonServiece.getAllRayon().subscribe((data:any)=>{this.rayons=data})
  }
  getProduit(){
    this.produitService.getAllproduit().subscribe((data:any)=>{this.produitStocks=data})
  }
  getTypeRayon(){
    this.typeRayonService.getAllTypeRayon().subscribe((data:any)=>{this.typeRayons=data})
  }
  getSearch(form:NgForm){
    this.isTrue=false;
    this.rayonServiece.getSearch(form.value).subscribe((data:any)=>{ 
      this.rayonShearshs=data;
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
