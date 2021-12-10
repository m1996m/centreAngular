import { Component, OnInit } from '@angular/core';
import { RayonService } from '../../services/rayon.service';
import { CentreService } from '../../services/centre.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rayon-etat',
  templateUrl: './rayon-etat.component.html',
  styleUrls: ['./rayon-etat.component.css']
})
export class RayonEtatComponent implements OnInit {

  form:any;
  rayons:any;
  constructor(private rayonService:RayonService) { }

  ngOnInit(): void {
    this.getRayon();
  }

  getRayon(){
    this.rayonService.getEtat().subscribe((data:any)=>{this.rayons=data;console.log(this.rayons)})
  }

  getColor(total:number): string{
    if(total<=10){
      return "red";
    }else if(total<=20){
      return "yellow"
    }else{
      return "green";
    }
  }

}
