import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-single-freelancer',
  templateUrl: './single-freelancer.component.html',
  styleUrls: ['./single-freelancer.component.scss']
})
export class SingleFreelancerComponent implements OnInit ,OnChanges {
Freelancer:Freelancer |undefined|void=undefined;
  constructor(private service:CrudService , private activatedRoute:ActivatedRoute){

  }
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  ngOnInit(): void {
  //  let freelancerID=this.activatedRoute.snapshot.paramMap.get('fid');
  //   console.log(freelancerID);

  let freelancerID:string=(this.activatedRoute.snapshot.paramMap.get('fid'))?String(this.activatedRoute.snapshot.paramMap.get('fid')):"";
  let foundFreelancer=this.service.getFreelancerByID(freelancerID);
  if(foundFreelancer !== null){
   this.Freelancer=foundFreelancer;
   console.log(this.Freelancer);
  }
 
  
  
    
  }
 
  

}
