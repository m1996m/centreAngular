import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/user-model.Model';
import { UserService } from '../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  Users:UserModel=new UserModel(0,'','','','','','','',0,'','','','');
  form:any;
  dataEmail:any;
  dataTel:any;
  isTrue:boolean=false;
  constructor(private UserService:UserService,private fb:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.Users.id],
      nom:[this.Users.nom,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      prenom:[this.Users.prenom,[Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
      adresse:[this.Users.adresse,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      image:[this.Users.image],
      password:[this.Users.password,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      confirmation:[this.Users.confirmation,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      dateNaissance:[this.Users.dateNaissance],
      centre:[this.Users.centre,[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
      tel:[this.Users.tel,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      email:[this.Users.email,[Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.email]],
    });
  }

  Enregistrer(){
    this.UserService.createUser(this.form.value).subscribe((data:any)=>{this.router.navigate(['/login'])});
  }
  onblurTel(){
    this.UserService.verificationUniciteTEl(this.form.value).subscribe((data:any)=>{
      this.dataTel=data;
    });
  }
  onblurEmail(){
    this.UserService.verificationUniciteEmail(this.form.value).subscribe((data:any)=>{
      this.dataEmail=data;
    });
  }
  onblurConfirmation(){
    this.isTrue=false;
    if(this.form.value['password']!=this.form.value['confirmation']){
      this.isTrue=true;
    }
  }

}
