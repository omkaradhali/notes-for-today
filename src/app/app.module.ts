import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

// New imports to update based on AngularFire2 version 4

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDQEmqy4Q5S4W8My9KN_yyIR2hYWuwIPyM',
  authDomain: 'notes-for-today.firebaseapp.com',
  databaseURL: 'https://notes-for-today.firebaseio.com',
  storageBucket: 'notes-for-today.appspot.com',
  messagingSenderId: '161075405166'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
