import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomfireService } from '../services/customfire.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private fire:CustomfireService, private router:Router) { }

  addFriendForm = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    if(this.fire.isValidLogin()){
    }
    else{
      Swal.fire(
        'Unauthorized Access',
        'Login to Proceed',
        'error'
      )
      this.router.navigate(['home']);
    }
  }

  addFriend(){
    if(this.addFriendForm.value.email==""){
      Swal.fire(
        'Empty Input',
        "Please Enter Your Friend's Correct Email and Try again",
        'error'
      );
    }
    else{
      
    }
  }



}
