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
  createUser(User:UserModel) {
    return this.http.post(this.global+'User/new',User);
  }

  getSearch(User:UserModel) {
    return this.http.post(this.global+'rechercherUser',User);
  }

  verificationUniciteTEl(tel:UserModel) {
    return this.http.post(this.global+'verificationUniciteTelUser',tel);
  }
  getOneUser(id:number){
    return this.http.get(this.global+'getOneUser/'+id);
  }
  editUser(id:number, User:UserModel){
    return this.http.post(this.global+'getAndOrEditUser/'+id,User);
  }
  deleteUser(id:number){
    return this.http.delete(this.global+'getDeleteUser/'+id);
  }
}
