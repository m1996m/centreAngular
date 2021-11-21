import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { StockModel } from '../Models/stock-model.Model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllstock() {
    return this.http.get(this.global+'stock');
  }
  createStock(stock:StockModel) {
    return this.http.post(this.global+'stock/new',stock);
  }

  getSearch(stock:StockModel) {
    return this.http.post(this.global+'rechercherStock',stock);
  }

  getOneStock(id:number){
    return this.http.get(this.global+'getOneStock/'+id);
  }
  editStock(id:number, stock:StockModel){
    return this.http.post(this.global+'getAndOrEditStock/'+id,stock);
  }
  verificationNom(stock:any){
    return this.http.post(this.global+'verificationNom',stock);
  }
  deleteStock(id:number){
    return this.http.delete(this.global+'getDeleteStock/'+id);
  }
}
