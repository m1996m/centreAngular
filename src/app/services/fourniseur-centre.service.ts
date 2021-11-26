import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FournisseurModel } from '../Models/fournisseur-model.Model';

@Injectable({
  providedIn: 'root'
})
export class FourniseurCentreService {

  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllFournisseur() {
    return this.http.get(this.global+'Fournisseur');
  }
  createFournisseur(fournisseur:FournisseurModel) {
    return this.http.post(this.global+'Fournisseur/new',fournisseur);
  }

  getSearch(Fournisseur:FournisseurModel) {
    return this.http.post(this.global+'rechercherfournisseur',Fournisseur);
  }

  verificationUniciteTEl(tel:FournisseurModel) {
    return this.http.post(this.global+'verificationUniciteTelFournisseur',tel);
  }
  getOneFournisseur(id:number){
    return this.http.get(this.global+'getOneFournisseur/'+id);
  }
  editFournisseur(id:number, Fournisseur:FournisseurModel){
    return this.http.post(this.global+'getAndOrEditFournisseur/'+id,Fournisseur);
  }
  deleteFournisseur(id:number){
    return this.http.delete(this.global+'getDeleteFournisseur/'+id);
  }

}
