import { Component, OnInit } from '@angular/core';
import { CentreModel } from '../../Models/centre-model.Model';
import { CentreService } from '../../services/centre.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-centre-edit',
  templateUrl: './centre-edit.component.html',
  styleUrls: ['./centre-edit.component.css']
})
export class CentreEditComponent implements OnInit {

  centres:CentreModel=new CentreModel(0,'','','','','','','');
  form:any;
  dataEmail:any;
  dataTel:any;
  id:number=0;
  centre:any;
  constructor(private centreService:CentreService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.centreService.getOneCentre(this.id).subscribe((data:any)=>{this.centre=data})
  }
  // initForm(){
  //   this.form=this.fb.group({
  //     id:[this.centres.id],
  //     nom:[this.centres.nom],
  //     adresse:[this.centres.adresse],
  //     pays:[this.centres.pays, ],
  //     ville:[this.centres.ville, ],
  //     tel:[this.centres.tel],
  //     email:[this.centres.email],
  //   });
  // }

  Enregistrer(form:NgForm){
    this.centreService.editCentre(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/centre'])});
  }

}
