import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/user-model.Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient ) { }

  getAllUser() {
    return this.http.get(this.global+'User');
  }
  createUser(User:any) {
    return this.http.post(this.global+'register',User);
  }
  connexion(data:any){
    return this.http.post(this.global+'api/login',data);
  }
  getSearch(User:any) {
    return this.http.post(this.global+'rechercherUser',User);
  }

  verificationUniciteTEl(tel:any) {
    return this.http.post(this.global+'verificationUniciteTel',tel);
  }

  verificationUniciteEmail(email:any) {
    return this.http.post(this.global+'verificationUniciteEmail',email);
  }
  getOneUser(id:number){
    return this.http.get(this.global+'getOneUser/'+id);
  }
  editUser(id:number, User:any){
    return this.http.post(this.global+'getAndOrEditUser/'+id,User);
  }
  deleteUser(id:number){
    return this.http.delete(this.global+'getDeleteUser/'+id);
  }
}
