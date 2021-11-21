import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits:any;
  produit:any;
  form:any;
  isTrue:boolean=true;
  constructor(private produitServiece: ProduitService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getproduit();
    this.form=this.fb.group({
      content:['']
    });
  }

  getproduit(){
    this.produitServiece.getAllproduit().subscribe((data:any)=>{this.produits=data})
  }
  getSearch(){
    this.isTrue=false;
    this.produitServiece.getSearch(this.form.value).subscribe((data:any)=>{ 
      this.produit=data;
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
