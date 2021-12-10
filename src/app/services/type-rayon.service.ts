import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeRayonModel } from '../Models/type-rayon-model.Model';

@Injectable({
  providedIn: 'root'
})
export class TypeRayonService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllTypeRayon() {
    return this.http.get(this.lien+'type/rayon');
  }
  createTypeRayon(Rayon:TypeRayonModel) {
    return this.http.post(this.lien+'type/rayon/new',Rayon);
  }

  getSearch(Rayon:any) {
    return this.http.post(this.lien+'interogationRayon',Rayon);
  }

  getVerificationDesignation(Rayon:any) {
    return this.http.post(this.lien+'verificationTypeRayon',Rayon);
  }

  getOneTypeRayon(id:number){
    return this.http.get(this.lien+'getOneTypeRayon/'+id);
  }
  editTypeRayon(id:number, Rayon:TypeRayonModel){
    return this.http.post(this.lien+'getAndOrEditTypeRayon/'+id,Rayon);
  }
  deleteTypeRayon(id:number){
    return this.http.delete(this.lien+'getDeleteTypeRayon/'+id);
  }
}
