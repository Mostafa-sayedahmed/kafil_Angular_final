import { Component } from '@angular/core';
import { GetservicesService } from 'src/app/services/getservices.service';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor( private translate: TranslateService) {
    translate.setDefaultLang('ar');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang);
  }
}
