import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {

  clients:any;
  client:any;
  id:number=0;
  constructor(private router:Router, private clientService:ClientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOneclient();
  }
  deleteclient(){
    this.clientService.deleteClient(this.id).subscribe((data:any)=>{})
    this.router.navigate(['/client']);
  }
  getOneclient(){
    this.clientService.getOneClient(this.id).subscribe((data:any)=>{this.client=data});
  }

}
