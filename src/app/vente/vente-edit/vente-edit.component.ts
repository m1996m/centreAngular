import { Component, OnInit } from '@angular/core';
import { RayonService } from '../../services/rayon.service';
import { VenteService } from '../../services/vente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-vente-edit',
  templateUrl: './vente-edit.component.html',
  styleUrls: ['./vente-edit.component.css']
})
export class VenteEditComponent implements OnInit {

  rayons:any;
  vente:any;
  id:number=0; 
  clients:any;
  constructor(private clientService:ClientService,private rayonService:RayonService,private venteService:VenteService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRayon();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneVente();
    this.getClient();
  }

  Enregistrer(form:NgForm){
    console.log(form.value); 
    this.venteService.editVente(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/vente'])});
  }
  getRayon(){
    this.rayonService.getAllRayon().subscribe((data:any)=>{this.rayons=data;});
  }
  getOneVente(){
    this.venteService.getOneVente(this.id).subscribe((data:any)=>{this.vente=data;});
  }
  getClient(){
    this.clientService.getAllClient().subscribe((data:any)=>{this.clients=data;});
  }

}
