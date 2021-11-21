import { Component, OnInit } from '@angular/core';
import { CentreModel } from '../../Models/centre-model.Model';
import { CentreService } from '../../services/centre.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-centre-show',
  templateUrl: './centre-show.component.html',
  styleUrls: ['./centre-show.component.css']
})
export class CentreShowComponent implements OnInit {

  centres:any;
  centre:any;
  id:number=0;
  constructor(private router:Router, private centreService:CentreService,private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOneCentre();
  }
  deleteCentre(){
    this.centreService.deleteCentre(this.id).subscribe((data:any)=>{})
    this.router.navigate(['/centre']);
  }
  getOneCentre(){
    this.centreService.getOneCentre(this.id).subscribe((data:any)=>{this.centre=data});
  }

}
