import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeProduitService } from '../../services/type-produit.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {

  produit:any;
  form:any;
  dataNOm:any;
  types:any;
  id:number=0;
  constructor(private produitService:ProduitService,private fb:FormBuilder,private router:Router, private typeService:TypeProduitService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getType();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneProduit();
  }
  // initForm(){
  //   this.form=this.fb.group({
  //     id:[this.produit.id],
  //     designation:[this.produit.value['designation'],[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  //     image:[this.produit.value['image']],
  //     pua:[this.produit.value['pua'],[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
  //     puv:[this.produit.puv,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
  //     type:[this.produit.value['idTypeProduit'],[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
  //   });
  // }

  Enregistrer(form:NgForm){
    this.produitService.editproduit(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/produit'])});
  }
  onblur(form:NgForm){
    this.dataNOm=0;
    this.produitService.verificationNom(form.value).subscribe((data:any)=>{
      this.dataNOm=data;
    });
  }
  getType(){
    this.typeService.getAllTypeProduit().subscribe((data:any)=>{
      this.types=data;
    });
  }
  getOneProduit(){
    this.produitService.getOneproduit(this.id).subscribe((data:any)=>{
    this.produit=data;
    });
  }

}
