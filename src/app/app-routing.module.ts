import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { SingleserviceComponent } from './components/singleservice/singleservice.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'freelancers', component: FreelancersComponent },
  { path: 'services/:serviceID', component: SingleserviceComponent },

  { path: 'projects', component: ProjectsComponent },
  { path: 'addproject', component: AddprojectComponent },

  { path: 'createservice', component: AddserviceComponent },
  { path: 'contests', component: ContestsComponent},
  { path: 'portfolois', component: PortfoloisComponent},
  { path: 'newportfoloi', component: AddportfoloiComponent},
  { path: 'projects/:projectID', component: ProjectsDetailsComponent },
  { path: 'freelancers/:fid', component: SingleFreelancerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contests/:contestID', component: ContestDetailsComponent  },
  { path: 'addContest', component: AddContestComponent },
  { path: 'addFreelancer', component: AddFreelancerComponent },
  { path: '**', component: NotfoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
