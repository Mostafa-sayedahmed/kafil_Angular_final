import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.scss'],
})
export class ServicecardComponent {
  @Input() carddata = {
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
  };
  ngOnInit() {}
}
