import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllVente() {
    return this.http.get(this.lien+'vente');
  }
  createVente(Vente:any) {
    return this.http.post(this.lien+'vente/new',Vente);
  }

  getSearch(Vente:any) {
    return this.http.post(this.lien+'rechercherVente',Vente);
  }

  getMesVente() {
    return this.http.get(this.lien+'mesventes');
  }
  getMesAchat() {
    return this.http.get(this.lien+'mesachats');
  }
  getOneVente(id:number){
    return this.http.get(this.lien+'getOneVente/'+id);
  }
  vente(vente:any){
    return this.http.get(this.lien+'ventedata',vente);
  }
  editVente(id:number, Vente:any){
    return this.http.post(this.lien+'getAndEditVente/'+id,Vente);
  }
  deleteVente(id:number){
    return this.http.delete(this.lien+'getDeleteVente/'+id);
  }
}
