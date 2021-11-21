import { Component, OnInit } from '@angular/core';
import { TypeProduitModel } from '../../Models/type-produit-model.Model';
import { TypeProduitService } from '../../services/type-produit.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-produit-create',
  templateUrl: './type-produit-create.component.html',
  styleUrls: ['./type-produit-create.component.css']
})
export class TypeProduitCreateComponent implements OnInit {

  type:TypeProduitModel=new TypeProduitModel(0,'');
  form:any;
  dataType:any;
  constructor(private typeService:TypeProduitService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
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

}
