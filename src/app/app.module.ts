import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { CustomfireService } from './services/customfire.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ChatComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [CustomfireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
