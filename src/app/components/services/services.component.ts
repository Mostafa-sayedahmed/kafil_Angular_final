import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  hidden = true;
  showcount = 3;
  searchtext = '';
  itemscount = 5;
  showcountLG = 6;
  showcountSM = 4;
  constructor(
    public service: GetservicesService,
    public category: CategoriesService
  ) {}

  // @ViewChildren('categorybtn') categorybtn: QueryList<ElementRef> | undefined;
  categriesList = [
    {
      categoryName: 'تسويق',
      CategoryPic: 'assets/images/marketing.svg',
      categoryLink: '#',
    },
  ];

  sliders = [
    { name: 'خدمات التسويق', link: '#', items: [] },
    { name: 'خدمات التصميم', link: '#', items: [] },
    { name: 'خدمات مالية', link: '#', items: [] },
    { name: 'خدمات برمجية', link: '#', items: [] },
    { name: 'خدمات صوتية', link: '#', items: [] },
    { name: 'خدمات الكتابة و الترجمة', link: '#', items: [] },
  ];
  ngOnInit() {
    if (window.innerWidth < 770) {
      this.showcount = this.showcountSM;
    } else {
      this.showcount = this.showcountLG;
    }

    this.category
      .getcategories()
      .then((result) => {
        this.categriesList = Array.from(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnChanges() {
    if (window.innerWidth < 770) {
      this.showcount = this.showcountSM;
    } else {
      this.showcount = this.showcountLG;
    }
  }
  showallcat() {
    if (window.innerWidth < 770) {
      this.showcount = this.showcountSM;
      if (this.hidden) {
        this.showcount = this.categriesList.length;

        this.hidden = false;
      } else {
        this.showcount = this.showcountSM;

        this.hidden = true;
      }
    } else {
      this.showcount = this.categriesList.length;

      if (this.hidden) {
        this.showcount = this.categriesList.length;

        this.hidden = false;
      } else {
        this.showcount = this.showcountLG;

        this.hidden = true;
      }
    }

    return false;
  }

  test() {
    // console.log('clicked');
    // let data = this.servces.getservices();
    // console.log(data);
    // console.log(this.ser vces.getservices());

    console.log(
      this.category
        .getcategories()
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {})
    );

    // console.log(mycategories);
  }
  // );
}
// }
