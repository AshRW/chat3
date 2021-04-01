import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"", pathMatch:"full", redirectTo:"home"
  },
  {
    path:"contacts", component:ContactsComponent
  },
  {
    path:"chat", component:ChatComponent
  },
  {
    path:"about", component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
