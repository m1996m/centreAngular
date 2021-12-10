import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  constructor(private fb:FormBuilder,private globalService:GlobalService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      email:['email',Validators.required],
      password:['password',Validators.required],
    });
  }
  connexion(){
    this.globalService.connexion(this.form.value).subscribe((data:any)=>{
      if(data){
        localStorage.setItem('token',data.token);
        this.globalService.isAuth=true;
      }
      this.router.navigate(['/centre'])
    });
  }

}
