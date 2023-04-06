import { Component, DoCheck, OnInit } from '@angular/core';
import { GetservicesService } from 'src/app/services/getservices.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  user = {
    apiKey: '',
    appName: '',
    createdAt: '',
    displayName: '  ',
    email: '',
    emailVerified: '',
    isAnonymous: '',
    lastLoginAt: '',
    photoURL: '',
    providerData: [{}],
    stsTokenManager: {
      refreshToken: '',
      accessToken: '',
      expirationTime: '',
    },
    uid: '',
  };
  username = '';
  photo = '';
  constructor(private userservice: UserService) {}
  ngDoCheck(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    // console.log(this.user.displayName);
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    // console.log(this.user.displayName);
  }
  logout() {
    this.userservice.SignOut();
  }
}
