import { Component, OnInit } from '@angular/core';
import { StockModel } from '../Models/stock-model.Model';
import { StockService } from '../services/stock.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks:any;
  stock:any;
  form:any;
  isTrue:boolean=true;
  constructor(private stockServiece: StockService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getstock();
    this.form=this.fb.group({
      content:['']
    });
  }

  getstock(){
    this.stockServiece.getAllstock().subscribe((data:any)=>{this.stocks=data;});
  }
  getSearch(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
    this.stockServiece.getSearch(this.form.value).subscribe((data:any)=>{ 
      this.stock=data;
    });
  }

  getIsTrue(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
  }

}
