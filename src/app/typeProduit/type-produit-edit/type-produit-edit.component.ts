import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, NgForm } from '@angular/forms';
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
     this.id=this.activedRoute.snapshot.params['id'];
     this.getOneType();
  }
  // initForm(){
  //   this.form=this.fb.group({
  //     id:[this.type.id],
  //     type:[this.type.type,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  //   });
  // }

  Enregistrer(form:NgForm){
    this.typeService.editTypeProduit(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/type/produit'])});
  }
  onblur(form:NgForm){
    this.dataType=0;
    this.typeService.verificationUniciteTypeProduit(form.value).subscribe((data:any)=>{
      this.dataType=data;
    });
  }

  getOneType(){
    this.typeService.getOneTypeProduit(this.id).subscribe((data:any)=>{this.type=data});
  }

}
