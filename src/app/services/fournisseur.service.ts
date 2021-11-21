import { Injectable } from '@angular/core';
import { FournisseurModel } from '../Models/fournisseur-model.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllFournisseur() {
    return this.http.get(this.global+'fournisseur');
  }
  createFournisseur(fournisseur:FournisseurModel) {
    return this.http.post(this.global+'fournisseur/new',fournisseur);
  }

  getSearch(Fournisseur:FournisseurModel) {
    return this.http.post(this.global+'rechercherFournisseur',Fournisseur);
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
