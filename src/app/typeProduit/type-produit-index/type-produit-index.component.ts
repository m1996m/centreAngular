import { Component, OnInit } from '@angular/core';
import { TypeProduitService } from '../../services/type-produit.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-produit-index',
  templateUrl: './type-produit-index.component.html',
  styleUrls: ['./type-produit-index.component.css']
})
export class TypeProduitIndexComponent implements OnInit {

  types:any;
  constructor(private typeService: TypeProduitService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.gettype();
  }

  gettype(){
    this.typeService.getAllTypeProduit().subscribe((data:any)=>{this.types=data})
  }

}
