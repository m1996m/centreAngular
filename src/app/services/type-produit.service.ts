import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeProduitModel } from '../Models/type-produit-model.Model';

@Injectable({
  providedIn: 'root'
})
export class TypeProduitService {

  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllTypeProduit() {
    return this.http.get(this.global+'type/produit');
  }
  createTypeProduit(TypeProduit:TypeProduitModel) {
    return this.http.post(this.global+'type/produit/new',TypeProduit);
  }
  getOneTypeProduit(id:number){
    return this.http.get(this.global+'getOneTypeProduit/'+id);
  }
  editTypeProduit(id:number, TypeProduit:TypeProduitModel){
    return this.http.post(this.global+'getAndOrEditTypeProduit/'+id,TypeProduit);
  }
  verificationUniciteTypeProduit(TypeProduit:any){
    return this.http.post(this.global+'verificationUniciteTypeProduit',TypeProduit);
  }
  getSearch(Produit:any){
    return this.http.post(this.global+'rechercherProduitDesignationType',Produit);
  }
  deleteTypeProduit(id:number){
    return this.http.delete(this.global+'getDeleteTypeProduit/'+id);
  }
}
