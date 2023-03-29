import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ...................................add in  28 / 3 / 2023 by esraa mokhtar......................................//

// fireBase initialization
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

// componant initialization
import { ProjectsDetailsComponent } from './component/projectsDetails/projectsDetails.component';
import { ContestsComponent } from './component/contests/contests.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

// .....................................................................................//

@NgModule({
  declarations: [
    AppComponent,
    // ...................................add in  28 / 3 / 2023 by esraa mokhtar......................................//
    ProjectsDetailsComponent,
    ContestsComponent,
    RegisterComponent,
    LoginComponent,
    // .....................................................................................//
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ...................................add in  28 / 3 / 2023 by esraa mokhtar......................................//
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // .....................................................................................//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
