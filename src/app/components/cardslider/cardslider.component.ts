import {
  Component,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ServicecardComponent } from '../servicecard/servicecard.component';

@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.scss'],
})
export class CardsliderComponent implements OnChanges {
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
    items: [
      {
        uid: '',
        data: {
          userid: '',
          title: '',
          description: '',
          category: '',
          price: '',
          mainImg: '',
          imgs: [],
          deliveryDuration: '',
          buyerinstructions: '',
          addons: [
            {
              addonTitle: '',
              addonPrice: 0,
              addonDeliveryDuration: '',
            },
          ],
          isfeatured: '',
          isaproved: '',
          rating: 0,
          orderscount: 0,
        },
      },
    ],
  };
  ngOnInit() {
    // console.log(this.sliderdata);
    this.sliderdata.items.shift();
    // console.log(this.sliderdata.items);

    this.sliderdata.items;
    console.log();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.sliderdata.items.length);
    // console.log(this.totalcards);
    // console.log(this.sliderdata.items.length);
    // console.log(changes['sliderdata'].currentValue.items);
    // console.log(this.sliderdata.items);
  }
  test() {
    console.log(this.totalcards);
    console.log(this.sliderdata.items.length);
  }
  ngAfterViewInit() {
    this.totalcards = this.servicecard.toArray().length;
    // console.log(this.totalcards);
    this.sliderdata.items.length;

    if (window.innerWidth < 500) {
      this.totalsteps = this.totalcards;
      console.log('Total steps: ' + this.totalsteps);
    } else {
      if (this.totalcards < 8) {
        this.totalsteps = Math.round(this.totalcards / 2);
      } else {
        this.totalsteps = Math.round(this.totalcards / 2) + 1;
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
