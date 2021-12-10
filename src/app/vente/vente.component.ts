import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VenteService } from '../services/vente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  ventes:any;
  produitStocks:any;
  isTrue:boolean=true;
  stocks:any;
  venteShearshs:any;
  constructor(private venteServiece: VenteService,private router:Router) { }

  ngOnInit(): void {
    this.getVente();
  }

  getVente(){
    this.venteServiece.getMesVente().subscribe((data:any)=>{this.ventes=data})
  }

  getSearch(form:NgForm){
    this.isTrue=false;
    this.venteServiece.getSearch(form.value).subscribe((data:any)=>{ 
      this.venteShearshs=data;
    });
  }
  getIsTrue(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
  }

}
