import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import {  UserService } from './services/user.service';

import { ProjectsDetailsComponent } from './component/projectsDetails/projectsDetails.component';
import { ContestsComponent } from './component/contests/contests.component';
import { HomePageComponent } from './component/homePage/home-page/home-page.component';
import { FreelancersComponent } from './component/freelancers/freelancers/freelancers.component';

import {   ReactiveFormsModule } from '@angular/forms';

import {RegisterComponent} from './component/register/register.component'
import {LoginComponent} from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component'

const routes: Routes = [
  { path: '', redirectTo: '/register-user', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register-user', component: RegisterComponent },
  { path: 'forgot-password', component:ForgetPasswordComponent },
  { path: 'home', component:  HomePageComponent},
  { path: 'contests', component: ContestsComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    // ProjectsDetailsComponent,
    // ContestsComponent,
    // HomePageComponent,
    // FreelancersComponent,
    // RegisterComponent,
    // ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  //reactievform
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),


    [RouterModule.forRoot(routes)],
   
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
