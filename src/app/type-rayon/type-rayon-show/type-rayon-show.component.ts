import { Component, OnInit } from '@angular/core';
import { TypeRayonService } from '../../services/type-rayon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-type-rayon-show',
  templateUrl: './type-rayon-show.component.html',
  styleUrls: ['./type-rayon-show.component.css']
})
export class TypeRayonShowComponent implements OnInit {

  type:any;
  id:number=0;
  constructor(private typeService: TypeRayonService,private activedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activedRoute.snapshot.params['id'];
    this.gettype();
  }

  gettype(){
    this.typeService.getOneTypeRayon(this.id).subscribe((data:any)=>{this.type=data;console.log(this.type)});
  }

  getDeleteType(){
    this.typeService.deleteTypeRayon(this.id).subscribe((data:any)=>{this.router.navigate(['/type/rayon'])});
  }


}
