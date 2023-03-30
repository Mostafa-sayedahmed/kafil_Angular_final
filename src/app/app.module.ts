import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsModule } from '@angular/forms';
import { CardsliderComponent } from './components/cardslider/cardslider.component';
import { ServicecardComponent } from './components/servicecard/servicecard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ServicesComponent, CardsliderComponent, ServicecardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
