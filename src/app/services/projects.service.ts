import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import {  project } from './../models/iproject';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  ListOfprojects : project[] = []
  constructor(private firestore: Firestore) { }

  getProjects() {
    let project = collection(this.firestore, "projects")
    return collectionData(project, { idField: "id" }) as Observable<project[]>
  }

}

