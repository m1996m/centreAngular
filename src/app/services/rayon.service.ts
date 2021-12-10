import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RayonModel } from '../Models/rayon-model.Model';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllRayon() {
    return this.http.get(this.lien+'rayon');
  }
  createRayon(Rayon:RayonModel) {
    return this.http.post(this.lien+'rayon/new',Rayon);
  }

  getSearch(Rayon:any) {
    return this.http.post(this.lien+'interogationRayon',Rayon);
  }

  getEtat() {
    return this.http.get(this.lien+'etatRayon');
  }
  getOneRayon(id:number){
    return this.http.get(this.lien+'getOneRayon/'+id);
  }
  editRayon(id:number,Rayon:any){
    return this.http.post(this.lien+'getAndEditRayon/'+id,Rayon);
  }
  verificationQuantite(rayon:any){
    return this.http.post(this.lien+'verificationQuantite',rayon);
  }
  deleteRayon(id:number){
    return this.http.delete(this.lien+'getDeleteRayon/'+id);
  }
}
