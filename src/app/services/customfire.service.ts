import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { auth } from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/auth';
// import { auth } from 'firebase/firebase-auth';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomfireService {
  loginStatus=false;
  userData:any;

  constructor(private afs:AngularFirestore, private afa:AngularFireAuth, private router:Router, private ngzone:NgZone) { }

  
  loginWithEmailAndPassword(u,p){
    this.afa.signInWithEmailAndPassword(u,p)
    .then((res)=>{
      this.userData=res.user;
      console.log(this.userData);
      this.loginStatus=true;
      sessionStorage.setItem("user",this.userData);
      this.router.navigate(['contacts'])
    })
    .catch((err)=>{
      Swal.fire(
        'Wrong Credentials',
        'Check Email and Pass again',
        'error'
      )
      console.log(err.message+" - "+err.code);
    })
  }

  logOut(){
    this.afa.signOut()
    .then((res)=>{
      this.loginStatus=false;
      this.userData=null;
      // console.log("Logged out now - "+res);
      sessionStorage.clear();
      this.router.navigate(['home']); 
    })
  }

  isValidLogin(){
    if(this.loginStatus==true){
      return true;
    }
    else{
        this.router.navigate(['home']);
        return false;
      }
    }

    fetchFromSessionStorage(){
      var temp=sessionStorage.getItem("user");
      if(temp!=null){
        this.loginStatus=true
        this.userData=temp;
      }
    }



  
}
