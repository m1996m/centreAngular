import { Component, OnInit } from '@angular/core';
import { TypeRayonService } from '../../services/type-rayon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-type-rayon-edit',
  templateUrl: './type-rayon-edit.component.html',
  styleUrls: ['./type-rayon-edit.component.css']
})
export class TypeRayonEditComponent implements OnInit {

  dataType:any;
  id:number=0;
  typeRayon:any;
  constructor(private typeRayonService:TypeRayonService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneTypeRayon();
  }

  Enregistrer(form:NgForm){
    this.typeRayonService.createTypeRayon(form.value).subscribe((data:any)=>{this.router.navigate(['/type/rayon'])});
  }
  onblur(form:NgForm){
    this.dataType=0;
    this.typeRayonService.getVerificationDesignation(form.value).subscribe((data:any)=>{
      this.dataType=data;
    });
  }
  getOneTypeRayon(){
    this.typeRayonService.getOneTypeRayon(this.id).subscribe((data:any)=>{
      this.typeRayon=data;
    });
  }

}
