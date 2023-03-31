import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	
}
