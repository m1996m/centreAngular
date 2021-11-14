import { Component, OnInit } from '@angular/core';
import { CentreModel } from '../../Models/centre-model.Model';
import { CentreService } from '../../services/centre.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-index',
  templateUrl: './centre-index.component.html',
  styleUrls: ['./centre-index.component.css']
})
export class CentreIndexComponent implements OnInit {
  centres:any;
  centre:CentreModel=new CentreModel(0,'','','','','','','');
  form:any;
  constructor(private centreServiece: CentreService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getCentre();
    this.form=this.fb.group({
      content:[this.centre.content]
    });
  }

  getCentre(){
    this.centreServiece.getAllCentre().subscribe((data:any)=>{this.centres=data})
  }
  getSearch(){
    this.centreServiece.getSearch(this.form.value).subscribe((data:any)=>{ 
      this.centre=data;
      console.log(this.centre);
    });
  }
}
