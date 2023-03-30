import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './components/services/services.component';
import { SingleserviceComponent } from './components/singleservice/singleservice.component';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { HomePageComponent } from './component/homePage/home-page/home-page.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:serviceID', component: SingleserviceComponent },
  // { path: '', redirectTo: '/register-user', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register-user', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

})
export class AppRoutingModule {}
