import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname=""
  acno=""
  pswd=""
  balance=""

  registerForm=this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.minLength(4),Validators.required]],
    balance:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private regrouter:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){

    var fname=this.registerForm.value.fname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    var balance=this.registerForm.value.balance
    if(this.registerForm.valid){
      var result=this.ds.register(acno,fname,pswd,balance
        )
      if(result){
        alert("Account Created Successfully...Please Login")
        this.regrouter.navigateByUrl('')
      }
      else{
        alert("Account Already Exist...Please Log In")
      }

    }
    else{
      alert("invalid")
    }
    
  }

}
