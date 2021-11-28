import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // aim="your perfect banking partner"

  accno="Account number please"

  acno=""

  pswd=""


  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.minLength(4),Validators.required]]
  })

  constructor(private routerlogin:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }
  login(){
    var acno=this.loginForm.value.acno
    
    var pswd=this.loginForm.value.pswd

    if(this.loginForm.valid){
      let result=this.ds.login(acno,pswd)
      if(result){
          alert("login success")
          this.routerlogin.navigateByUrl('dashboard')
        }

    }
else{
  alert("Form Invalid")
}
  

  }
  // login(a:any,p:any){

  //   var acno=a.value
    
  //     var pswd=p.value
  
  //     let db=this.data
  //     if(acno in db){
  //       if(pswd==db[acno]["password"]){
  //         alert("login success")
  //       }
  //       else{
  //         alert("invalid password")
  //       }
  
  //     }
  //     else{
  //       alert("User does not exist")
  //     }
  // }
}
