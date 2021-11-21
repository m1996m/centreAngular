import { Component, OnInit } from '@angular/core';
import { TypeProduitService } from '../../services/type-produit.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-produit-show',
  templateUrl: './type-produit-show.component.html',
  styleUrls: ['./type-produit-show.component.css']
})
export class TypeProduitShowComponent implements OnInit {

  type:any;
  id:number=0;
  constructor(private typeService: TypeProduitService,private activedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activedRoute.snapshot.params['id'];
    this.gettype();
  }

  gettype(){
    this.typeService.getOneTypeProduit(this.id).subscribe((data:any)=>{this.type=data});
  }

  getDeleteType(){
    this.typeService.deleteTypeProduit(this.id).subscribe((data:any)=>{this.router.navigate(['/type/produit'])});
  }

}
