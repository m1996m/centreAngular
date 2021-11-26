import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ClientModel } from '../Models/client-model.Model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllClient() {
    return this.http.get(this.global+'client');
  }
  createClient(Client:ClientModel) {
    return this.http.post(this.global+'client/new',Client);
  }

  getSearch(Client:ClientModel) {
    return this.http.post(this.global+'rechercherClient',Client);
  }

  verificationUniciteTEl(tel:ClientModel) {
    return this.http.post(this.global+'verificationUniciteTelClient',tel);
  }
  getOneClient(id:number){
    return this.http.get(this.global+'getOneCLient/'+id);
  }
  editClient(id:number, Client:ClientModel){
    return this.http.post(this.global+'getAndEditClient/'+id,Client);
  }
  deleteClient(id:number){
    return this.http.delete(this.global+'client/getRemove/'+id);
  }
}
