import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TypeProduitModel } from '../../Models/type-produit-model.Model';
import { TypeProduitService } from '../../services/type-produit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-produit-edit',
  templateUrl: './type-produit-edit.component.html',
  styleUrls: ['./type-produit-edit.component.css']
})
export class TypeProduitEditComponent implements OnInit {

  type:any;
  form:any;
  dataType:any;
  id:number=0;
  constructor(private typeService:TypeProduitService,private activedRoute:ActivatedRoute, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
     this.id=this.activedRoute.snapshot.params['id'];
     this.getOneType();
      this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.type.id],
      type:[this.type.type,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    });
  }

  Enregistrer(){
    this.typeService.createTypeProduit(this.form.value).subscribe((data:any)=>{this.router.navigate(['/type/produit'])});
  }
  onblur(){
    this.dataType.id=0;
    this.typeService.verificationUniciteTypeProduit(this.form.value).subscribe((data:any)=>{
      this.dataType=data;
      console.log(this.dataType);
      return this.dataType;
    });
  }

  getOneType(){
    this.typeService.getOneTypeProduit(this.id).subscribe((data:any)=>{this.type=data});
  }

}
