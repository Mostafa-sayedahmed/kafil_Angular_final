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
import { ProjectsDetailsComponent } from './components/projectsDetails/projectsDetails.component';
import { SingleFreelancerComponent } from './components/single-freelancer/single-freelancer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PortfoloisComponent } from './components/portfolois/portfolois/portfolois.component';
import { AddportfoloiComponent } from './components/portfolois/addportfoloi/addportfoloi.component';
import { ContestDetailsComponent } from './components/contest-details/contest-details.component';
import { AddContestComponent } from './components/add-contest/add-contest.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AddFreelancerComponent } from './components/add-freelancer/add-freelancer.component';
// import { HomeComponent } from './home/home.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddprojcetComponent } from './components/addprojcet/addprojcet.component';

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
    SingleFreelancerComponent,
    NotfoundComponent,
    FooterComponent,
    SidebarComponent,
    PortfoloisComponent,
    AddportfoloiComponent,
    ContestDetailsComponent,
    AddContestComponent,
    AddFreelancerComponent,

    ProjectsComponent,
    AddprojcetComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
