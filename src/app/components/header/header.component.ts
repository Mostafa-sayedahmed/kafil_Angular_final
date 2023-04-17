import { Component } from '@angular/core';
import { GetservicesService } from 'src/app/services/getservices.service';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
  }
  // ngDoCheck(): void {
  //   this.user = JSON.parse(localStorage.getItem('user')!);
  // }
  // ngOnInit(): void {
  //   this.user = JSON.parse(localStorage.getItem('user')!);
  //   // // console.log(this.user.displayName);
  //   // this.userservice
  //   //   .getUserbyID(this.user.uid)
  //   //   .then((user) => {
  //   //     console.log(user);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // }
  // logout() {
  //   this.userservice.SignOut();
  // }

  changeLang(lang: string) {
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang);
  }
}
