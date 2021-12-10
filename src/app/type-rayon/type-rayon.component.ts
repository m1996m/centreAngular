import { Component, OnInit } from '@angular/core';
import { TypeRayonService } from '../services/type-rayon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-rayon',
  templateUrl: './type-rayon.component.html',
  styleUrls: ['./type-rayon.component.css']
})
export class TypeRayonComponent implements OnInit {


  types:any;
  constructor(private typeService: TypeRayonService,private router:Router) { }

  ngOnInit(): void {
    this.gettype();
  }

  gettype(){
    this.typeService.getAllTypeRayon().subscribe((data:any)=>{this.types=data})
  }

}
