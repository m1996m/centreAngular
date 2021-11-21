import { Component, OnInit } from '@angular/core';
import { ProduitStockModel } from '../../Models/produit-stock-model.Model';
import { ProduitStockService } from '../../services/produit-stock.service';
import { FormBuilder, Validators } from '@angular/forms';
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
  formFournisseur:any;
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
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.produitStocks.id],
      user:[this.produitStocks.user],
      fournisseur:[this.produitStocks.fournisseur],
      produit:[this.produitStocks.produit],
      pua:[this.produitStocks.pua,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      puv:[this.produitStocks.puv,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      quantite:[this.produitStocks.quantite,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
    });
  }

  initFormFournisseur(){
    this.produitStocks=this.form;
    this.form=this.fb.group({
      id:[this.fournisseur.id],
      nm:[this.fournisseur.nom,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      prenom:[this.fournisseur.prenom,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      tel:[this.fournisseur.tel,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
      adresse:[this.fournisseur.adresse,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
      image:[this.fournisseur.image],
      dateNaissance:[this.fournisseur.dateNaissance],

    });
  }

  Enregistrer(){
    this.produitStockService.createProduitStock(this.form.value).subscribe((data:any)=>{this.router.navigate(['/produitStock'])});
  }

  EnregistrerFournisseur(){
    console.log(this.formFournisseur.value);
    this.fournisseuService.createFournisseur(this.formFournisseur.value).subscribe((data:any)=>{});
    this.getFournisseur();
    this.isTrue=true;
  }
    onblurTel(){
      this.dataTel.id=0;
      this.produitStockService.verificationUniciteTEl(this.form.value).subscribe((data:any)=>{
        this.dataTel=data;
    });
    
  }
  onClick(){
    this.isTrue=false;
  }

  getProduit(){
    this.produitService.getAllproduit().subscribe((data:any)=>{this.produits=data;});
  }
  getFournisseur(){
    this.fournisseuService.getAllFournisseur().subscribe((data:any)=>{
      this.fournisseurs=data;
    });
  }

  blurProduit(){
    this.produitService.getSearch(this.form.value).subscribe((data:any)=>{this.dataproduit=data;console.log(this.dataproduit)});
  }

  getStock(){
    this.stockService.getAllstock().subscribe((data:any)=>{this.stocks=data;});
  }
}
