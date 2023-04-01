import { Injectable } from '@angular/core';
import { Freelancer } from '../models/freelancer';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})

export class CrudService {

  freelancersRef!: AngularFireList<any> 
  freelancerRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create Freelancer
  AddFreelancer(freelancer: Freelancer) {
    this.freelancersRef.push({
      firstName: freelancer.firstName,
      lastName: freelancer.lastName,
      email: freelancer.email,
      mobileNumber: freelancer.mobileNumber,
    });
  }
  // Fetch Single Student Object
  GetFreelancer(id: string) {
    this.freelancerRef = this.db.object('freelancers-list/' + id);
    return this.freelancerRef;
  }
  // Fetch Students List
  GetStudentsList() {
    this.freelancersRef = this.db.list('students-list');
    return this.freelancersRef;
  }
  // Update Student Object
  UpdateStudent(freelancer: Freelancer) {
    this.freelancerRef.update({
      firstName: freelancer.firstName,
      lastName: freelancer.lastName,
      email: freelancer.email,
      mobileNumber: freelancer.mobileNumber,
    });
  }
  // Delete Student Object
  DeleteStudent(id: string) {
    this.freelancerRef = this.db.object('students-list/' + id);
    this.freelancerRef.remove();
  }
}
