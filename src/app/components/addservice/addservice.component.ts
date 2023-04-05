import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
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
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(100)]],
    category: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(5), Validators.max(999)]],
    mainImg: ['', Validators.required],
    imgs: [''],
    deliveryDuration: ['', Validators.required],
    buyerinstructions: ['', [Validators.required, Validators.minLength(20)]],
    addons: this.formbuilder.array([]),
  });
  serviceDraft = JSON.parse(sessionStorage.getItem('serviceDraft')!);
  ngOnInit() {
    this.serviceDraft = this.serviceDraft;
  }

  addservice() {
    if (this.serviceform.valid) {
      this.service.addservice(this.serviceform.value);
      console.log('data added successfully');
    } else {
      console.log('form is invalid');
    }
  }

  get addons() {
    return this.serviceform.get('addons') as FormArray;
  }

  newaddon() {
    console.log('new addon');
    const addongroup = this.formbuilder.group({
      addonTitle: ['', [Validators.required, Validators.minLength(5)]],
      addonPrice: [
        '',
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
      addonDeliveryDuration: ['', Validators.required],
    });
    this.addons.push(addongroup);
    return false;
  }
  deleteaddon(index: number) {
    console.log('deleted');
    this.addons.removeAt(index);
    return false;
  }

  saveDraft() {
    let data = JSON.stringify(this.serviceform.value);
    sessionStorage.setItem('serviceDraft', data);
    this.serviceDraft = sessionStorage.getItem('serviceDraft');
  }

  restoreDraft() {
    const draftAddons = this.serviceDraft['addons'];
    for (let item of draftAddons) {
      const addongroup = this.formbuilder.group({
        addonTitle: ['', [Validators.required, Validators.minLength(5)]],
        addonPrice: [
          '',
          [Validators.required, Validators.min(0), Validators.max(999)],
        ],
        addonDeliveryDuration: ['', Validators.required],
      });
      console.log(item);
      this.addons.push(addongroup);
    }
    this.serviceform.setValue({
      title: this.serviceDraft['title'],
      description: this.serviceDraft['description'],
      price: this.serviceDraft['price'],
      mainImg: this.serviceDraft['mainImg'],
      category: this.serviceDraft['category'],
      imgs: this.serviceDraft['imgs'],
      deliveryDuration: this.serviceDraft['deliveryDuration'],
      buyerinstructions: this.serviceDraft['buyerinstructions'],
      addons: Array.from(draftAddons),
    });
    console.log(draftAddons);
  }
  
}
