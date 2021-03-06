import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../services/fournisseur.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurModel } from '../../Models/fournisseur-model.Model';

@Component({
  selector: 'app-fournisseur-edit',
  templateUrl: './fournisseur-edit.component.html',
  styleUrls: ['./fournisseur-edit.component.css']
})
export class FournisseurEditComponent implements OnInit {

  //fournisseurs:FournisseurModel=new FournisseurModel(0,'','','','',',','','');
  form:any;
  dataTel:any;
  id:number=0;
  fournisseur:any;
  constructor(private fournisseurService:FournisseurService,private router:Router, private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.fournisseurService.getOneFournisseur(this.id).subscribe((data:any)=>{this.fournisseur=data;})
  }
  // initForm(){
  //   this.form=this.fb.group({
  //     id:[this.fournisseurs.id],
  //     nom:[this.fournisseurs?.nom],
  //     prenom:[this.fournisseurs.prenom],
  //     adresse:[this.fournisseurs.adresse, ],
  //     dateNaissance:[this.fournisseurs.dateNaissance],
  //     tel:[this.fournisseurs.tel],
  //     image:[this.fournisseurs.image],
  //   });
  // }

  Enregistrer(form:NgForm){
    this.fournisseurService.editFournisseur(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/fournisseur'])});
  }
  onblurTel(form:NgForm){
    this.fournisseurService.verificationUniciteTEl(form.value).subscribe((data:any)=>{
      this.dataTel=data;
  }); 
}

}
