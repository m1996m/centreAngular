import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RayonModel } from '../../Models/rayon-model.Model';
import { RayonService } from '../../services/rayon.service';
import { ProduitStockService } from '../../services/produit-stock.service';
import { NgForm } from '@angular/forms';
import { TypeRayonService } from '../../services/type-rayon.service';

@Component({
  selector: 'app-rayon-create',
  templateUrl: './rayon-create.component.html',
  styleUrls: ['./rayon-create.component.css']
})
export class RayonCreateComponent implements OnInit {

  form:any;
  types:any;
  produitStocks:any;
  isExiste:boolean=false; 
  quantite:any;
  constructor(private RayonService:RayonService,private typeRayonService:TypeRayonService, private router:Router,private produitStockService:ProduitStockService) { }

  ngOnInit(): void {
    this.getType();
    this.getProduitStock();
  }

  Enregistrer(form:NgForm){
    this.RayonService.createRayon(form.value).subscribe((data:any)=>{this.router.navigate(['/rayon'])});
  }
  getType(){
    this.typeRayonService.getAllTypeRayon().subscribe((data:any)=>{this.types=data;});
  }

  getProduitStock(){
    this.produitStockService.getAllProduitStock().subscribe((data:any)=>{this.produitStocks=data;});
  }
  isQuantiteExiste(form:NgForm){
    this.isExiste=false;
    this.RayonService.verificationQuantite(form.value).subscribe((data:any)=>{
     this.quantite=data;
      if(data){
        this.isExiste= true;
      }
    });
    return this.isExiste;
  }

}
