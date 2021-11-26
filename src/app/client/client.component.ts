import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:any;
  client:any;
  fournisseur:any;
  form:any;
  isTrue:boolean=true;
  constructor(private clienterviece: ClientService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.getfournisseur();
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      content:['']
    });
  }

  getfournisseur(){
    this.clienterviece.getAllClient().subscribe((data:any)=>{this.clients=data})
  }
  getSearch(){
    this.isTrue=false;
    this.clienterviece.getSearch(this.form.value).subscribe((data:any)=>{this.client=data;});
  }
  getIsTrue(){
    if(this.isTrue){
      this.isTrue=false;
    }else{
      this.isTrue=true;
    }
    this.initForm();
  }

}
