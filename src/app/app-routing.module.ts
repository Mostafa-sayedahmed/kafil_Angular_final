import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/homePage/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FreelancersComponent } from './component/freelancers/freelancers/freelancers.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent} ,
  {path:"",component:HomePageComponent} ,
  {path:"home",component:HomePageComponent} ,
  {path:"freelancers",component:FreelancersComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
