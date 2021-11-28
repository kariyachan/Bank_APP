import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUsername:any  

  data:any={
    1000:{acno:1000,uname:"Ram",password:"user1",balance:5000},
    1001:{acno:1001,uname:"Arjun",password:"user2",balance:4000},
    1002:{acno:1002,uname:"Das",password:"user3",balance:8000}


  }

  constructor() { }

  register(acno:any,uname:any,password:any,balance:any){
    let database=this.data

    if(acno in database){
      return false

    }
    else{
      database[acno]={
        acno,
        uname,
        password,
        balance
      }
      return true
     
    }
  }
  login(acno:any,pswd:any){
    let database=this.data
    if(acno in database){
      if(pswd==database[acno]["password"]){
        this.currentUsername=database[acno]["uname"]
      return true
 
      }
      else{
        alert("invalid password")
        return false
      }

    }
    else{
      alert("User does not exist")
      return false
    }
  }
  deposit(acno:any,psw:any,amt:any){
   let database=this.data
   var amount=parseInt(amt)

   if(acno in database){
     
     if(psw==database[acno]["password"]){

       database[acno]["balance"]= database[acno]["balance"]+amount
       return database[acno]["balance"]

     }
     else{
       alert("wrong password")
       return false
     }
   }
   else{
     alert("user not found")
     return false
   }

  }
  withdraw(acno1:any,psw1:any,amount1:any){
    let database=this.data
    let amt=parseInt(amount1)
 
    if(acno1 in database){
      
      if(psw1==database[acno1]["password"]){

        if(database[acno1]["balance"]>amt){
 
        database[acno1]["balance"]= database[acno1]["balance"]-amt
        return database[acno1]["balance"]
 
      }
      else{
        alert("insufficient balance")
      }
    }
      else{
        alert("wrong password")
        return false
      }

    
  }
    else{
      alert("user not found")
      return false
    }

  }
}
