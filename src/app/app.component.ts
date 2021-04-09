import { AfterContentChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomfireService } from './services/customfire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterContentChecked{
  ngOnInit(){ 
    // this.logged_in=this.fire.loginStatus;
    this.fire.fetchFromSessionStorage();
  }
  ngAfterContentChecked(){
    this.logged_in=this.fire.loginStatus;
  }
  title = 'chat-app-three';
  logged_in=false;

  constructor(private router:Router, private fire:CustomfireService){}

  // Functions from HTML
  goToHome(){
    this.router.navigateByUrl('home');
  }
  goToAbout(){
    this.router.navigateByUrl('about');
  }
  logout(){
    this.fire.logOut();
  }
}
