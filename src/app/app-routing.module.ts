import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { SingleserviceComponent } from './components/singleservice/singleservice.component';
import { AddserviceComponent } from './components/addservice/addservice.component';
import { ContestsComponent } from './components/contests/contests.component';
import { ProjectsDetailsComponent } from './components/projectsDetails/projectsDetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SingleFreelancerComponent } from './components/single-freelancer/single-freelancer.component';
import { PortfoloisComponent } from './components/portfolois/portfolois/portfolois.component';
import { AddportfoloiComponent } from './components/portfolois/addportfoloi/addportfoloi.component';
import { DetailsPortfoloisComponent } from './components/portfolois/details-portfolois/details-portfolois.component';
import { ContestDetailsComponent } from './components/contest-details/contest-details.component';
import { AddContestComponent } from './components/add-contest/add-contest.component';
import { AddFreelancerComponent } from './components/add-freelancer/add-freelancer.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'freelancers', component: FreelancersComponent },
  { path: 'services/:serviceID', component: SingleserviceComponent },
  {
    path: 'createservice',
    component: AddserviceComponent,
    canActivate: [AuthGuard],
  },
  { path: 'contests', component: ContestsComponent },
  { path: 'portfolois', component: PortfoloisComponent },
  {
    path: 'newportfoloi',
    component: AddportfoloiComponent,
    canActivate: [AuthGuard],
  },
  { path: 'detailsPortfolois/:id', component: DetailsPortfoloisComponent },
  { path: 'projects/:projectID', component: ProjectsDetailsComponent },
  { path: 'freelancers/:fid', component: SingleFreelancerComponent },
  { path: 'home', component: HomeComponent },

  { path: 'projects', component: ProjectsComponent },
  { path: 'contests/:contestID', component: ContestDetailsComponent },
  {
    path: 'addContest',
    component: AddContestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addFreelancer',
    component: AddFreelancerComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
