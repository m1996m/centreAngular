import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FournisseurModel } from '../../Models/fournisseur-model.Model';
import { Router } from '@angular/router';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.css']
})
export class FournisseurCreateComponent implements OnInit {

  fournisseur:FournisseurModel=new FournisseurModel(0,'','','','','','','');
  formFournisseur:any;
  dataTel:any;
  fournisseurs:any;
  constructor(private fb:FormBuilder,private router:Router,private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.initFormFournisseur();
  }

  initFormFournisseur(){
    this.formFournisseur=this.fb.group({
      id:[this.fournisseur.id],
      nom:[this.fournisseur.nom,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      prenom:[this.fournisseur.prenom,[Validators.required,Validators.minLength(1),Validators.maxLength(7)]],
      tel:[this.fournisseur.tel,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
      adresse:[this.fournisseur.adresse,[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
      image:[this.fournisseur.image],
      dateNaissance:[this.fournisseur.dateNaissance],

    });
  }
  EnregistrerFournisseur(){
    this.fournisseurService.createFournisseur(this.formFournisseur.value).subscribe((data:any)=>{this.router.navigate(['/fournisseur'])});
  }
  onblurTel(){
      this.fournisseurService.verificationUniciteTEl(this.formFournisseur.value).subscribe((data:any)=>{
        this.dataTel=data;
        console.log(this.dataTel);
    }); 
  }
}
