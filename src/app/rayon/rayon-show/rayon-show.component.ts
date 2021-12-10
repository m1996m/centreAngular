import { Component, OnInit } from '@angular/core';
import { RayonService } from '../../services/rayon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rayon-show',
  templateUrl: './rayon-show.component.html',
  styleUrls: ['./rayon-show.component.css']
})
export class RayonShowComponent implements OnInit {

  rayon:any;
  form:any;
  id:number=0;
  constructor(private rayonServiece: RayonService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneRayon();
  }
  getOneRayon(){
    this.rayonServiece.getOneRayon(this.id).subscribe((data:any)=>{
      this.rayon=data;
    });
  }
  getDelete(){
    this.rayonServiece.deleteRayon(this.id).subscribe((data:any)=>{this.router.navigate(['/rayon'])});
  }

}
