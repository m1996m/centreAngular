import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client:any;
  form:any;
  dataTel:any;
  id:number=0;
  constructor(private clientService:ClientService,private router:Router, private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clientService.getOneClient(this.id).subscribe((data:any)=>{this.client=data;})
  }
  // initForm(){
  //   this.form=this.fb.group({
  //     id:[this.clients.id],
  //     nom:[this.clients?.nom],
  //     prenom:[this.clients.prenom],
  //     adresse:[this.clients.adresse, ],
  //     dateNaissance:[this.clients.dateNaissance],
  //     tel:[this.clients.tel],
  //     image:[this.clients.image],
  //   });
  // }

  Enregistrer(form:NgForm){
    this.clientService.editClient(this.id,form.value).subscribe((data:any)=>{this.router.navigate(['/client'])});
  }
  onblurTel(form:NgForm){
    this.dataTel=0;
    this.clientService.verificationUniciteTEl(form.value).subscribe((data:any)=>{
      this.dataTel=data;
  }); 
}

}
