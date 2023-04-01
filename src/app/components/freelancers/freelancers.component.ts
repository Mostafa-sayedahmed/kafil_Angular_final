import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Freelancer } from 'src/app/models/freelancer';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss']
})
export class FreelancersComponent implements OnInit {
  freelancers:Freelancer[]=[];
  constructor(private myService:CrudService){

  }
  ngOnInit(): void {
   this.myService.getAllFreelancers().subscribe(data=>this.freelancers=data
   );
   
  }
}
