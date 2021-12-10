import { Component, OnInit } from '@angular/core';
import { VenteService } from '../../services/vente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vente-show',
  templateUrl: './vente-show.component.html',
  styleUrls: ['./vente-show.component.css']
})
export class VenteShowComponent implements OnInit {

  vente:any;
  form:any;
  id:number=0;
  constructor(private venteServiece: VenteService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneVente();
  }
  getOneVente(){
    this.venteServiece.getOneVente(this.id).subscribe((data:any)=>{
      this.vente=data;
    });
  }
  getDelete(){
    this.venteServiece.deleteVente(this.id).subscribe((data:any)=>{this.router.navigate(['/vente'])});
  }

}
