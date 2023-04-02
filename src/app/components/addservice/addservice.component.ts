import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss'],
})
export class AddserviceComponent {
  constructor(
    private formbuilder: FormBuilder,
    private service: GetservicesService
  ) {}
  serviceform = this.formbuilder.group({
    title: [''],
    description: [''],
    category: [''],
    price: [],
    mainImg: [''],
    imgs: [''],
    deliveryDuration: [''],
    buyerinstructions: [''],
    addons: [''],
    ratings: [],
    isFeatured: [false],
    servedCustomers: [],
    inProgressOrders: [],
    completedOreders: [],
  });
  ngOnInit() {}
  addservice() {
    console.log(this.serviceform.value);
    this.service.addservice(this.serviceform.value);
  }
}
