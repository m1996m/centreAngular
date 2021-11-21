import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentreModel } from '../Models/centre-model.Model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {
  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllCentre() {
    return this.http.get(this.global+'centre');
  }
  createCentre(centre:CentreModel) {
    return this.http.post(this.global+'centre/new',centre);
  }

  verificationUniciteEmail(email:CentreModel) {
    return this.http.post(this.global+'verificationUniciteEmail',email);
  }

  getSearch(centre:CentreModel) {
    return this.http.post(this.global+'rechercherCentre',centre);
  }

  verificationUniciteTEl(tel:CentreModel) {
    return this.http.post(this.global+'verificationUniciteTelCentre',tel);
  }
  getOneCentre(id:number){
    return this.http.get(this.global+'getOneCentre/'+id);
  }
  editCentre(id:number, centre:CentreModel){
    return this.http.post(this.global+'getAndOrEditCentre/'+id,centre);
  }
  deleteCentre(id:number){
    return this.http.delete(this.global+'getDeleteCentre/'+id);
  }
}
