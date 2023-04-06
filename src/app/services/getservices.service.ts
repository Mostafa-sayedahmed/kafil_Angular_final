import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
} from 'firebase/firestore';
import { Service } from './../models/service';

@Injectable({
  providedIn: 'root',
})
export class GetservicesService {
  db = getFirestore();
  constructor(private firestore: Firestore) {}
  serviceslist: any[] = [];
  addservice(service: Service) {
    let servicesRef = collection(this.firestore, 'services');
    addDoc(servicesRef, service)
      .then((res) => {
        console.log('data added successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getservices() {
    const querySnapshot = await getDocs(collection(this.firestore, 'services'));
    querySnapshot.forEach((doc) => {
      this.serviceslist = [
        ...this.serviceslist,
        { uid: doc.id, data: doc.data() },
      ];
      // console.log(doc.id, ' => ', doc.data());
      // // console.log({ uid: doc.id, data: doc.data() });
      // return doc.id, ' => ', doc.data();
    });
    return this.serviceslist;
  }
  async getServicebyID(id: string) {
    const docRef = doc(this.db, 'services', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
}
//   getuserbyid(uid: string) {
//     let userdata: any;
//     this.afs
//       .collection('users')
//       .doc(uid)
//       .get()
//       .subscribe((user) => {
//         userdata = user.data();
//         // console.log(userdata);

//         return userdata;
//       }
// }
