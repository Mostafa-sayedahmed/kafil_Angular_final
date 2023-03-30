import {
  Component,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren,
  Input,
} from '@angular/core';
import { ServicecardComponent } from '../servicecard/servicecard.component';

@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.scss'],
})
export class CardsliderComponent {
  @ViewChild('sliderstage', { static: true }) sliderstage?: ElementRef;

  @ViewChildren('cardRef') servicecard!: QueryList<ServicecardComponent>;
  totalcards = 0;
  totalsteps = 0;
  currentstep = 1;
  stepmile = 312; //px
  stepmileMobile = 424; //px
  @Input() sliderdata = {
    name: '',
    link: '',
    items: [],
  };
  ngAfterViewInit() {
    this.totalcards = this.servicecard.toArray().length;
    console.log(window.innerWidth);
    console.log(this.sliderdata.name);

    console.log(this.totalcards);
    if (window.innerWidth < 500) {
      this.totalsteps = this.totalcards;
      console.log('Total steps: ' + this.totalsteps);
    } else {
      if (this.totalcards < 8) {
        this.totalsteps = Math.round(this.totalcards / 2);
        console.log('Total steps: ' + this.totalsteps);
      } else {
        this.totalsteps = Math.round(this.totalcards / 2) + 1;
        console.log('Total steps: ' + this.totalsteps);
      }
    }
  }

  nextslide() {
    if (this.currentstep < this.totalsteps) {
      if (window.innerWidth < 770) {
        this.sliderstage!.nativeElement.style = `transform: translate(${
          this.stepmileMobile * this.currentstep
        }px);`;
        this.currentstep++;
      } else {
        this.sliderstage!.nativeElement.style = `transform: translate(${
          this.stepmile * this.currentstep
        }px);`;
        this.currentstep++;
      }
    }
  }
  prevslide() {
    if (this.currentstep > 1) {
      if (window.innerWidth < 770) {
        this.sliderstage!.nativeElement.style = `transform: translate(${
          this.stepmileMobile * (this.currentstep - 2)
        }px);`;
        this.currentstep--;
      } else {
        this.sliderstage!.nativeElement.style = `transform: translate(${
          this.stepmile * (this.currentstep - 2)
        }px);`;
        this.currentstep--;
      }
    }
  }
}
