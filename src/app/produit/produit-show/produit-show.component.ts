import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit-show',
  templateUrl: './produit-show.component.html',
  styleUrls: ['./produit-show.component.css']
})
export class ProduitShowComponent implements OnInit {

  produit:any;
  form:any;
  id:number=0;
  constructor(private produitServiece: ProduitService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneProduit();
  }
  getOneProduit(){
    this.produitServiece.getOneproduit(this.id).subscribe((data:any)=>{
      this.produit=data;
    });
  }
  getDelete(){
    this.produitServiece.deleteproduit(this.id).subscribe((data:any)=>{this.router.navigate(['/produit'])});
  }

}
