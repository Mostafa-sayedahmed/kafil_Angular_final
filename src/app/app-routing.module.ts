import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { SingleserviceComponent } from './components/singleservice/singleservice.component';
import { AddserviceComponent } from './components/addservice/addservice.component';
import { ContestsComponent } from './components/contests/contests.component';
import {ProjectsDetailsComponent} from './components/projectsDetails/projectsDetails.component';
import { PortfoloisComponent } from './components/portfolois/portfolois/portfolois.component';
import { AddportfoloiComponent } from './components/portfolois/addportfoloi/addportfoloi.component';
import { DetailsPortfoloisComponent } from './components/portfolois/details-portfolois/details-portfolois.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'freelancers', component: FreelancersComponent },
  { path: 'services/:serviceID', component: SingleserviceComponent },
  { path: 'createservice', component: AddserviceComponent },
  { path: 'contests', component: ContestsComponent},
  { path: 'portfolois', component: PortfoloisComponent},
  { path: 'newportfoloi', component: AddportfoloiComponent},
  { path: 'detailsPortfolois/:id', component: DetailsPortfoloisComponent },
  { path: 'projects/:projectID', component: ProjectsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
