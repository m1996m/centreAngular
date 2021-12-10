import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { StockModel } from '../Models/stock-model.Model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllstock() {
    return this.http.get(this.lien+'stock');
  }
  createStock(stock:StockModel) {
    return this.http.post(this.lien+'stock/new',stock);
  }

  getSearch(stock:any) {
    return this.http.post(this.lien+'rechercherStock',stock);
  }

  getOneStock(id:number){
    return this.http.get(this.lien+'getOneStock/'+id);
  }
  editStock(id:number, stock:any){
    return this.http.post(this.lien+'getAndEditStock/'+id,stock);
  }
  verificationNom(stock:any){
    return this.http.post(this.lien+'verificationNom',stock);
  }
  deleteStock(id:number){
    return this.http.delete(this.lien+'getDeleteStock/'+id);
  }
}
