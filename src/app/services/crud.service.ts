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

freelancer:Freelancer|undefined=undefined;
 
  constructor(private fs:AngularFirestore) {}


  getAllFreelancers():Observable<any[]>{   
return  this.fs.collection("Freelancers").snapshotChanges()
  }



  getFreelancerByID(id:string){
this.fs.collection("Freelancers").doc(id).ref.get().then(function(doc){
  if (doc.exists) {
        console.log( doc.data());
        
      } else {
        console.log("There is no document!");
      }
})
  }
}
