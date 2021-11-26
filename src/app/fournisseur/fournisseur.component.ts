import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../services/fournisseur.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseurs:any;
  fournisseur:any;
  form:any;
  isTrue:boolean=true;
  constructor(private fournisseurServiece: FournisseurService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getfournisseur();
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      content:['']
    });
  }

  getfournisseur(){
    this.fournisseurServiece.getAllFournisseur().subscribe((data:any)=>{this.fournisseurs=data})
  }
  getSearch(){
    this.isTrue=false;
    this.fournisseurServiece.getSearch(this.form.value).subscribe((data:any)=>{ 
      this.fournisseur=data;
    });
  }
  getIsTrue(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
    this.initForm();
  }

}
