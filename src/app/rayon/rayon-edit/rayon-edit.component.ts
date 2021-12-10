import { Component, OnInit } from '@angular/core';
import { RayonService } from '../../services/rayon.service';
import { TypeRayonService } from '../../services/type-rayon.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitStockService } from '../../services/produit-stock.service';

@Component({
  selector: 'app-rayon-edit',
  templateUrl: './rayon-edit.component.html',
  styleUrls: ['./rayon-edit.component.css']
})
export class RayonEditComponent implements OnInit {

  form:any;
  types:any;
  produitStocks:any;
  id:number=0;
  rayon:any;
  isExiste:any;
  quantite:any;
  constructor(private rayonService:RayonService, private activatedRoute:ActivatedRoute,private typeRayonService:TypeRayonService, private router:Router,private produitStockService:ProduitStockService) { }

  ngOnInit(): void {
    this.getType();
    this.getProduitStock();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneRayon();
  }

  Enregistrer(form:NgForm){
    this.rayonService.editRayon(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/rayon'])});
  }
  getType(){
    this.typeRayonService.getAllTypeRayon().subscribe((data:any)=>{this.types=data;});
  }
  getProduitStock(){
    this.produitStockService.getAllProduitStock().subscribe((data:any)=>{this.produitStocks=data;});
  }
  getOneRayon(){
    this.rayonService.getOneRayon(this.id).subscribe((data:any)=>{this.rayon=data});
  }

  isQuantiteExiste(form:NgForm){
    this.isExiste=false;
    this.rayonService.verificationQuantite(form.value).subscribe((data:any)=>{
     this.quantite=data;
      if(data){
        this.isExiste= true;
      }
    });
    return this.isExiste;
  }

}
