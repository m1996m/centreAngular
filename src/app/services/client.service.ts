import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ClientModel } from '../Models/client-model.Model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  lien = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllClient() {
    return this.http.get(this.lien+'client');
  }
  createClient(Client:ClientModel) {
    return this.http.post(this.lien+'client/new',Client);
  }

  getSearch(Client:any) {
    return this.http.post(this.lien+'rechercherClient',Client);
  }

  verificationUniciteTEl(tel:any) {
    return this.http.post(this.lien+'verificationUniciteTelClient',tel);
  }
  getOneClient(id:number){
    return this.http.get(this.lien+'getOneCLient/'+id);
  }
  editClient(id:number, Client:any){
    return this.http.post(this.lien+'getAndEditClient/'+id,Client);
  }
  deleteClient(id:number){
    return this.http.delete(this.lien+'client/getRemove/'+id);
  }
}
