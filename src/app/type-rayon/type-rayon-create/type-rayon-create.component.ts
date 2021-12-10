import { Component, OnInit } from '@angular/core';
import { TypeRayonService } from '../../services/type-rayon.service';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-type-rayon-create',
  templateUrl: './type-rayon-create.component.html',
  styleUrls: ['./type-rayon-create.component.css']
})
export class TypeRayonCreateComponent implements OnInit {

  dataType:any;
  constructor(private typeRayonService:TypeRayonService,private router:Router) { }

  ngOnInit(): void {
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

}
