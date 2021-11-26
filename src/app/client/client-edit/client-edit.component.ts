import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ClientModel } from '../../Models/client-model.Model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  clients:ClientModel=new ClientModel(0,'','','','',',','','','');
  form:any;
  dataTel:any;
  id:number=0;
  constructor(private clientService:ClientService,private router:Router, private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clientService.getOneClient(this.id).subscribe((data:any)=>{this.clients=data;console.log(this.clients)})
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.clients.id],
      nom:[this.clients?.nom],
      prenom:[this.clients.prenom],
      adresse:[this.clients.adresse, ],
      dateNaissance:[this.clients.dateNaissance],
      tel:[this.clients.tel],
      image:[this.clients.image],
    });
  }

  Enregistrer(){
    this.clientService.editClient(this.id,this.form.value).subscribe((data:any)=>{this.router.navigate(['/client'])});
  }
  onblurTel(){
    this.clientService.verificationUniciteTEl(this.form.value).subscribe((data:any)=>{
      this.dataTel=data;
      console.log(this.dataTel);
  }); 
}

}
