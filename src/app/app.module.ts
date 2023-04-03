import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsliderComponent } from './components/cardslider/cardslider.component';
import { ServicecardComponent } from './components/servicecard/servicecard.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SingleserviceComponent } from './components/singleservice/singleservice.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AddserviceComponent } from './components/addservice/addservice.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ContestsComponent } from './components/contests/contests.component';
import {ProjectsDetailsComponent} from './components/projectsDetails/projectsDetails.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PortfoloisComponent } from './components/portfolois/portfolois/portfolois.component';
import { AddportfoloiComponent } from './components/portfolois/addportfoloi/addportfoloi.component';
import { DetailsPortfoloisComponent } from './components/portfolois/details-portfolois/details-portfolois.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    CardsliderComponent,
    ServicecardComponent,
    SingleserviceComponent,
    ForgetPasswordComponent,
    FreelancersComponent,
    LoginComponent,
    RegisterComponent,
    AddserviceComponent,
    ContestsComponent,
    ProjectsDetailsComponent,
    FooterComponent,
    SidebarComponent,
    PortfoloisComponent,
    AddportfoloiComponent,
    DetailsPortfoloisComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
