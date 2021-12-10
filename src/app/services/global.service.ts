import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  global = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  token:string="";
  isAuth:boolean=false;
  constructor(private http:HttpClient) { }

  connexion(data:any){
    return this.http.post(this.global+'api/login',data);
  }

}
