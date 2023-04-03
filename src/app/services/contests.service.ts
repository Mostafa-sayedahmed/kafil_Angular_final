import { Injectable } from '@angular/core';
import { collection,Firestore , query, where, getDocs, addDoc , doc , getDoc} from '@angular/fire/firestore';

import { collectionData } from '@angular/fire/firestore';
import { Icontest } from './../models/icontest';
import { IcontestSection } from './../models/icontestsection';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  contests : Icontest[] = []
  contestSections : IcontestSection[] = []
  constructor(private firestore: Firestore ) { }
  
  getContests() {
    let contest = collection(this.firestore, "contests")
    return collectionData(contest, { idField: "id" }) as Observable<Icontest[]>
  }


 async getContestsBySectionId(sectionId: string) {
      const q = query(collection(this.firestore, "contests"), where('sectionId', '==', sectionId));

      const querySnapshot = await getDocs(q);
        var newArr : Array<Icontest> = [];
        querySnapshot.forEach((doc) => {
        newArr.push(doc.data() as Icontest);
      });

      return newArr;
  }

  async getContestsByCompletedStatus() {
    const q = query(collection(this.firestore, "contests"), where('completed', '==', false));
    const querySnapshot = await getDocs(q);
      var newArr : Array<Icontest> = [];
      querySnapshot.forEach((doc) => {
      newArr.push(doc.data() as Icontest);
    });

    return newArr;
  }

  // async getContestByID(contestId: string) {
  //   const q = query(collection(this.firestore, "contests"), where('id', '==', contestId));
  //   const querySnapshot = await getDocs(q);
  //     var newArr : Array<Icontest> = [];
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data());
  //     newArr.push(doc.data() as Icontest);
  //   });

  //   return newArr;
  // }


  // async addComment(comment:string): Promise<void> {
  //   const commentData = {text: comment};

  //   try {
  //     const contestRef = collection(this.firestore, 'contests');
  //     await addDoc(contestRef, commentData);
  //     console.log('Comment added successfully!');
  //   } catch (error) {
  //     console.error('Error adding comment: ', error);
  //   }
  // }

  getContestById(contestId: string) {
    const contestRef = doc(this.firestore, 'contests', contestId);

    return getDoc(contestRef).then((doc) => {
        const data = doc.data() as Icontest;
        console.log(data);
          return data;
        })

  }

  // addComments(commentData: string){
  //   let contestsRef = collection(this.firestore, 'contests');
  //   let conestsRef = collection('contest').add(commentData)
  //   .then(() => {
  //     console.log('Comment added successfully!');
  //     this.comment = '';
  //   })
  //   .catch((error) => {
  //     console.error('Error adding comment: ', error);
  //   });
  // }


  getContestSections() {
    let contestSections = collection(this.firestore, "contestSections")
    return collectionData(contestSections, { idField: "id" }) as Observable<IcontestSection[]>
  }

  addcontest(contests: any) {
    let contestsRef = collection(this.firestore, 'contests');
    addDoc(contestsRef, contests)
      .then((res) => {
        console.log('data added successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  
}
