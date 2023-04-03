import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Freelancer } from 'src/app/models/freelancer';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.scss']
})
export class AddFreelancerComponent implements OnInit {
  newFreelancer:Freelancer={
    view: 0,
    likes: 0,
    rating: 0
  } as unknown as Freelancer;
  path:string="";
constructor(private service:CrudService, private fs:AngularFirestore,private router:Router){}
  ngOnInit(): void {
    

  }

  addNewFreelancer() {
    let id=this.fs.createId();
    this.fs.collection("Freelancers").doc(id).set(this.newFreelancer);
    this.router.navigate(["/freelancers"])
   }
  
    
   
 }



