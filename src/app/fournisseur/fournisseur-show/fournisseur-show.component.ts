import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-show',
  templateUrl: './fournisseur-show.component.html',
  styleUrls: ['./fournisseur-show.component.css']
})
export class FournisseurShowComponent implements OnInit {

  fournisseurs:any;
  fournisseur:any;
  id:number=0;
  constructor(private router:Router, private fournisseurService:FournisseurService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOnefournisseur();
  }
  deletefournisseur(){
    this.fournisseurService.deleteFournisseur(this.id).subscribe((data:any)=>{})
    this.router.navigate(['/fournisseur']);
  }
  getOnefournisseur(){
    this.fournisseurService.getOneFournisseur(this.id).subscribe((data:any)=>{this.fournisseur=data});
  }

}
