import { Injectable } from '@angular/core';
import { collection, query, where, getDocs, Firestore } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Icontest } from './../Models/icontest';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  contests : Icontest[] = []
  constructor(private firestore: Firestore) { }
  
  getContests() {
    let contest = collection(this.firestore, "contests")
    return collectionData(contest, { idField: "id" }) as Observable<Icontest[]>
  }

}
