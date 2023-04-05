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
  //  async GetProjects(){
  //     const querySnapshot = await getDocs(collection(this.firestore, 'projects'));
  //     querySnapshot.forEach((res)=>{
  //       console.log(res);
  //       return  res.data();
  //     })
  //   }
  getallprojects(){
    let project = collection(this.firestore, "projects")
    return collectionData(project, { idField: "id" }) as Observable<Projects[]>
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

