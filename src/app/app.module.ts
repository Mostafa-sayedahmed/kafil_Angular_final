import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProjectsDetailsComponent } from './component/projectsDetails/projectsDetails.component';
import { ContestsComponent } from './component/contests/contests.component';
import { HomePageComponent } from './component/homePage/home-page/home-page.component';
import { FreelancersComponent } from './component/freelancers/freelancers/freelancers.component';
import {   ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsDetailsComponent,
    ContestsComponent,
    HomePageComponent,
    FreelancersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    ReactiveFormsModule,  //reactievform
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
