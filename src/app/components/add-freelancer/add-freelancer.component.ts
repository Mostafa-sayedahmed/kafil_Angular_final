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

  get userState():boolean{
    return (localStorage.getItem("token"))?true:false;
      }
      userID:any="";
     
      
  newFreelancer:Freelancer|any={
  } as unknown as Freelancer;
  dataAboutUser:any={};
  path:string="";
constructor(private service:CrudService, private fs:AngularFirestore,private router:Router){}
  ngOnInit(): void {
    
    if(this.userState){
       this.userID=localStorage.getItem("user")
       const userid=JSON.parse(this.userID).uid;
     this.fs.collection("users").doc(userid).ref.get().then((doc) => {
      if (doc.exists) {
       this.dataAboutUser = doc.data();
       this.newFreelancer={
        name:this.dataAboutUser.fullname,
        email:this.dataAboutUser.email,
        views:0,
        portfolios:0,
        likes:0,

       }
       
      } else {
        console.log("There is no document!");
      }
    })

    }
  }

  addNewFreelancer() {
    let id=this.fs.createId();
    this.fs.collection("Freelancers").doc(id).set(this.newFreelancer);
    this.router.navigate(["/freelancers"])
   }
  
    
   
 }



