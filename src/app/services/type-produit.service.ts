import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeProduitModel } from '../Models/type-produit-model.Model';

@Injectable({
  providedIn: 'root'
})
export class TypeProduitService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllTypeProduit() {
    return this.http.get(this.lien+'type/produit');
  }
  createTypeProduit(TypeProduit:TypeProduitModel) {
    return this.http.post(this.lien+'type/produit/new',TypeProduit);
  }
  getOneTypeProduit(id:number){
    return this.http.get(this.lien+'getOneTypeProduit/'+id);
  }
  editTypeProduit(id:number, TypeProduit:any){
    return this.http.post(this.lien+'getAndEditTypeProduit/'+id,TypeProduit);
  }
  verificationUniciteTypeProduit(TypeProduit:any){
    return this.http.post(this.lien+'verificationUniciteTypeProduit',TypeProduit);
  }
  getSearch(Produit:any){
    return this.http.post(this.lien+'rechercherProduitDesignationType',Produit);
  }
  deleteTypeProduit(id:number){
    return this.http.delete(this.lien+'getDeleteTypeProduit/'+id);
  }
}
