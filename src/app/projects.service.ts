import { Injectable } from '@angular/core';

import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { Projects } from '../models/projects';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private firestore: Firestore) { }
  // getdataofprojects

  getallprojects(){
    let project = collection(this.firestore, "projects")
    return collectionData(project, { idField: "id" }) as Observable<Projects[]>
  }


   getprojecetById(){
    
   }

  // // addprojec
  // AddProjects(Projects:Projectss){
  //   let projects = collection(this.firestore, 'projects');
  //   addDoc(projects, proj)
  //   .then( (res) =>{
  //       return res;
  //   }).catch(err =>{console.log(err.message)});
  // }






}
