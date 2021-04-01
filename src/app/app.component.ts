import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    
  }
  title = 'chat-app-three';
  constructor(private router:Router){}
  // Functions from HTML
  goToHome(){
    this.router.navigateByUrl('home');
  }
  goToAbout(){
    this.router.navigateByUrl('about');
  }
  logout(){
    // log out logic
  }
}
