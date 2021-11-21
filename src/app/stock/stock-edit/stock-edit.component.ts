import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { StockModel } from '../../Models/stock-model.Model';
import { StockService } from '../../services/stock.service';
import { CentreService } from '../../services/centre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  stock:any;
  form:any;
  centres:any;
  id:number=0;
  dataNom:any;
  constructor(private stockervice:StockService,private fb:FormBuilder,private CentreService:CentreService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCentre();
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getOneStock();
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.stock?.id],
      content:[this.stock?.content],
      nom:[this.stock?.nom,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      adresse:[this.stock?.adresse,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      centtre:[this.stock?.centre,[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    });
  }
  getCentre(){
    this.CentreService.getAllCentre().subscribe((data:any)=>{this.centres=data});
    console.log(this.centres);
  }
  Enregistrer(){
    this.stockervice.editStock(this.id,this.form.value).subscribe((data:any)=>{this.router.navigate(['/stock'])});
  }
  onblur(){
    this.dataNom.id=0;
    this.stockervice.verificationNom(this.form.value).subscribe((data:any)=>{
      this.dataNom=data;
    });
  }
  getOneStock(){
    this.stockervice.getOneStock(this.id).subscribe((data:any)=>{this.stock=data});
  }

}
