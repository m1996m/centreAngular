import { Injectable } from '@angular/core';
import { ProduitStockModel } from '../Models/produit-stock-model.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitStockService {

  
  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllProduitStock() {
    return this.http.get(this.global+'ProduitStock');
  }
  createProduitStock(produitStock:ProduitStockModel) {
    return this.http.post(this.global+'ProduitStock/new',produitStock);
  }

  getSearch(produitStock:ProduitStockModel) {
    return this.http.post(this.global+'rechercherProduitStock',produitStock);
  }

  verificationUniciteTEl(tel:ProduitStockModel) {
    return this.http.post(this.global+'verificationUniciteTelProduitStock',tel);
  }
  getOneProduitStock(id:number){
    return this.http.get(this.global+'getOneProduitStock/'+id);
  }
  editProduitStock(id:number, produitStock:ProduitStockModel){
    return this.http.post(this.global+'getAndOrEditProduitStock/'+id,produitStock);
  }
  deleteProduitStock(id:number){
    return this.http.delete(this.global+'getDeleteProduitStock/'+id);
  }
  
}
