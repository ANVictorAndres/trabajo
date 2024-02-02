import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment'; 

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, provideFirebaseApp(() => initializeApp({"projectId":"ngbytes-fireauth-4a61b","appId":"1:104904055397:web:22e1ecab353fc97aaa448c","storageBucket":"ngbytes-fireauth-4a61b.appspot.com","apiKey":"AIzaSyADtA_CNaAIVtC5U_UW-jE12lSBOYMlxcE","authDomain":"ngbytes-fireauth-4a61b.firebaseapp.com","messagingSenderId":"104904055397"})), provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}