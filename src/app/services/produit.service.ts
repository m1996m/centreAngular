import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ProduitModel } from '../Models/produit-model.Model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllproduit() {
    return this.http.get(this.lien+'produit');
  }
  createproduit(produit:ProduitModel) {
    return this.http.post(this.lien+'produit/new',produit);
  }

  getSearch(produit:any) {
    return this.http.post(this.lien+'rechercherProduitDesignationType',produit);
  }

  getSearchID(produit:any) {
    return this.http.post(this.lien+'rechercherProduitID',produit);
  }

  getOneproduit(id:number){
    return this.http.get(this.lien+'getOneProduit/'+id);
  }
  editproduit(id:number, produit:ProduitModel){
    return this.http.post(this.lien+'getAndEditProduit/'+id,produit);
  }
  verificationNom(produit:any){
    return this.http.post(this.lien+'rechercherProduit',produit);
  }
  deleteproduit(id:number){
    return this.http.delete(this.lien+'getDeleteProduit/'+id);
  }
}
