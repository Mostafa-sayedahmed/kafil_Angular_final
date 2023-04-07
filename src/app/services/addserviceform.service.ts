import { Injectable } from '@angular/core';
import { Service, Addon } from '../models/service';
import { AddserviceComponent } from '../components/addservice/addservice.component';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddserviceformService {
  constructor(public formbuilder: FormBuilder) {}
}
