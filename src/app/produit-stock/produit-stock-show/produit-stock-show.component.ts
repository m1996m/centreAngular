import { Component, OnInit } from '@angular/core';
import { ProduitStockService } from '../../services/produit-stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit-stock-show',
  templateUrl: './produit-stock-show.component.html',
  styleUrls: ['./produit-stock-show.component.css']
})
export class ProduitStockShowComponent implements OnInit {

  produit:any;
  form:any;
  id:number=0;
  constructor(private produitServiece: ProduitStockService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneProduit();
  }
  getOneProduit(){
    this.produitServiece.getOneProduitStock(this.id).subscribe((data:any)=>{
      this.produit=data;
    });
  }
  getDelete(){
    this.produitServiece.deleteProduitStock(this.id).subscribe((data:any)=>{this.router.navigate(['/produit'])});
  }

}
