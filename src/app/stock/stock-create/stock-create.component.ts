import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../Models/stock-model.Model';
import {  CentreService } from '../../services/centre.service';
import { FormBuilder, Validators } from '@angular/forms';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  stock:StockModel=new StockModel(0,'','','');
  form:any;
  centres:any;
  dataNom:any;
  constructor(private stockervice:StockService,private fb:FormBuilder,private CentreService:CentreService) { }

  ngOnInit(): void {
    this.getCentre();
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.stock.id],
      content:[this.stock.content],
      nom:[this.stock.nom,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      adresse:[this.stock.adresse,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      centtre:[this.stock.centre,[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    });
  }
  getCentre(){
    this.CentreService.getAllCentre().subscribe((data:any)=>{this.centres=data});
    console.log(this.centres);
  }
  Enregistrer(){
    this.stockervice.createStock(this.form.value).subscribe((data:any)=>{});
  }
  onblur(){
    this.dataNom.id=0;
    this.stockervice.verificationNom(this.form.value).subscribe((data:any)=>{
      this.dataNom=data;
    });
  }

}
