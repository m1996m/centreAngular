import { Component, OnInit } from '@angular/core';
import { RayonService } from '../../services/rayon.service';
import { VenteService } from '../../services/vente.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-vente-create',
  templateUrl: './vente-create.component.html',
  styleUrls: ['./vente-create.component.css']
})
export class VenteCreateComponent implements OnInit {

  form:any;
  rayons:any;
  ventes:any;
  clients:any;
  vente= Array<{idProduit: number,idClient:number,quantite:number}>()
  result?:NgForm;
  datas = Array<{produit: string,puv:number,type:string,quantite:number}>();
  isOk:boolean=false;
  desabled:boolean=true;
  active:boolean=false;
  isTrue:boolean=false;
  i:Number=0;
  constructor(private clientService:ClientService,private rayonService:RayonService,private venteService:VenteService, private router:Router) { }

  ngOnInit(): void {
    this.getRayon();
    this.getClient();
  }

  Enregistrer(){
    console.log(this.vente);
    this.venteService.createVente(this.vente).subscribe((data:any)=>{this.router.navigate(['/vente'])});
  }
  getRayon(){
    this.rayonService.getAllRayon().subscribe((data:any)=>{this.rayons=data;});
  }
  getClient(){
    this.clientService.getAllClient().subscribe((data:any)=>{this.clients=data;});
  }

  ajoutForm(form:NgForm){
    this.isOk=true;
    this.active=true;
    this.isTrue=false;
    this.venteService.vente(form.value).subscribe((data:any)=>{
     // this.vente=data;console.log(this.datas);
    this.vente.push(form.value);
    this.datas.push(data);
    // console.log(data.length);
    // for(var i=0;i<1;i++){
    //   this.datas.push({produit:data['produit'],type:data['type'],puv:data['puv'],quantite:form.value['quantite']})
    // }
     console.log(this.datas);
    })
  }
  onChange(){
    this.isOk=false;
    this.isTrue=true;
  }
  reset(form:NgForm){
    this.isOk=true;
    this.desabled=true;
    form.resetForm();
    this.datas.splice(0);
    this.active=false;
  }
  onDesabled(){
    this.desabled=false;
  }
  supprimerElement(index:number){
    this.datas.splice(index,1);
    if(this.datas.length==0){
      this.active=false;
    }
  }

}
