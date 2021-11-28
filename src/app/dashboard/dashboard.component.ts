import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  psw=""
  amount=""

  acno1=""
  psw1=""
  amount1=""

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.minLength(4),Validators.required]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
 
  })

  withdrawalForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.minLength(4),Validators.required]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
 
  })

  userName=this.ds.currentUsername

  constructor(private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount
    if(this.depositForm.valid){
      var result=this.ds.deposit(acno,pswd,amount)

      if(result){
        alert(amount+" successfully credited... Now balance is : "+result)
      }
    }
    else{
      alert("Invalid Form")
    }

  

  }
  withdraw(){
    var acno1=this.withdrawalForm.value.acno1
    var pswd1=this.withdrawalForm.value.pswd1
    var amount1=this.withdrawalForm.value.amount1

    if(this.withdrawalForm.valid){

      var result=this.ds.withdraw(acno1,pswd1,amount1)

      if(result){
        alert(amount1+" successfully debited... Now balance is : "+result)
      }
  
    }
    else{
      alert("Invalid Form")
    }
  
  }

}
