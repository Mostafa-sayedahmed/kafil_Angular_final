import { Injectable } from '@angular/core';
import { Freelancer } from '../models/freelancer';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class CrudService {

 
  constructor(private fs:AngularFirestore) {}
  getAllFreelancers():Observable<any[]>{   
return  this.fs.collection("Freelancers").valueChanges();
  }
}
