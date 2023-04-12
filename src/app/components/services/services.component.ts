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
    {
      categoryName: 'خدمات مالية',
      CategoryPic: 'assets/images/money.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'تصاميم فنيه',
      CategoryPic: 'assets/images/design.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'برمجيات',
      CategoryPic: 'assets/images/software.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'كتابة وترجمة',
      CategoryPic: 'assets/images/writing.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'فيديو',
      CategoryPic: 'assets/images/video.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'صوتيات',
      CategoryPic: 'assets/images/audio.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'تدريب واستشارة',
      CategoryPic: 'assets/images/education.svg',
      categoryLink: '#',
    },
    {
      categoryName: 'المزيد',
      CategoryPic: 'assets/images/more.svg',
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
  ngOnInit() {
    if (window.innerWidth < 770) {
      this.showcount = this.showcountSM;
    } else {
      this.showcount = this.showcountLG;
    }
  }

  ngOnChanges() {
    if (window.innerWidth < 770) {
      this.showcount = this.showcountSM;
    } else {
      this.showcount = this.showcountLG;
    }
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
