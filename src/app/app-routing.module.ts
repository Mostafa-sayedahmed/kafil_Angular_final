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
import { PortfoloisComponent } from './components/portfolois/portfolois/portfolois.component';
import { AddportfoloiComponent } from './components/portfolois/addportfoloi/addportfoloi.component';
import { ContestDetailsComponent } from './components/contest-details/contest-details.component';
import { AddContestComponent } from './components/add-contest/add-contest.component';

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
  { path: 'contests/:contestID', component: ContestDetailsComponent  },
  { path: 'addContest', component: AddContestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
