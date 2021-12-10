import { Component, OnInit } from '@angular/core';
import { ProduitModel } from '../../Models/produit-model.Model';
import { ProduitService } from '../../services/produit.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeProduitService } from '../../services/type-produit.service';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {

  produits:ProduitModel=new ProduitModel(0,'','',0,0);
  form:any;
  dataNOm:any;
  types:any;
  constructor(private produitService:ProduitService,private fb:FormBuilder,private router:Router, private typeService:TypeProduitService) { }

  ngOnInit(): void {
    this.getType();
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.produits.id],
      designation:[this.produits.designation,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      image:[this.produits.image],
      pua:[this.produits.PUA,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      puv:[this.produits.PUV,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      idTypeProduit:[this.produits.idTypeProduit,[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    });
  }

  Enregistrer(){
  console.log(this.form.value);
    this.produitService.createproduit(this.form.value).subscribe((data:any)=>{this.router.navigate(['/produit'])});
  }
  onblur(){
    this.dataNOm=0;
    this.produitService.verificationNom(this.form.value).subscribe((data:any)=>{
      this.dataNOm=data;
    });
  }
  getType(){
    this.typeService.getAllTypeProduit().subscribe((data:any)=>{
      this.types=data;
    });
  }
}
