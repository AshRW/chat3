import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomfireService } from '../services/customfire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fire:CustomfireService, private router:Router) { }

  ngOnInit(): void {
    if(this.fire.isValidLogin()){
      this.router.navigate(['contacts'])
    }
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  loginNew(){
    let uname = this.loginForm.value.username;
    let pword=this.loginForm.value.password;
    this.loginForm.reset();
    this.fire.loginWithEmailAndPassword(uname,pword);
  }


}
