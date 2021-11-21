import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../Models/stock-model.Model';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/stock.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stock-show',
  templateUrl: './stock-show.component.html',
  styleUrls: ['./stock-show.component.css']
})
export class StockShowComponent implements OnInit {

  stocks:StockModel=new StockModel(0,'','','');
  stock:StockModel=new StockModel(0,'','','',);
  id:number=0;
  constructor(private router:Router, private stockService:StockService,private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOnestock();
  }
  deletestock(){
    this.stockService.deleteStock(this.id).subscribe((data:any)=>{})
    this.router.navigate(['/stock']);
  }
  getOnestock(){
    this.stockService.getOneStock(this.id).subscribe((data:any)=>{this.stock=data});
  }

}
