import { Component , OnInit } from '@angular/core';
import { Icontest } from 'src/app/models/icontest';
import { IcontestSection } from 'src/app/models/icontestsection';
import { ContestsService } from 'src/app/services/contests.service';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent {


  contest:Icontest[]=[];
  contestSections:IcontestSection[]=[];
  
  constructor(private CS: ContestsService,private router:Router , private US : UserService){

  }  

  ngOnInit(){
    this.GetAllContests();
    this.GetAllContestSections(); 

  }


  GetAllContests(){ 
      this.CS.getContests().subscribe((data)=>{
        console.log(data)
        this.contest = data;
        // this.US.getUserById(data.userId)
      })
    }


  GetAllContestSections(){ 
    this.CS.getContestSections().subscribe((data)=>{
        this.contestSections = data;
      })
    }

    ChangeContestSectionId(id:string){ 
      this.CS.getContestsBySectionId(id).then((data)=>{
        this.contest = data;
      })
    }

    ChangeContestCompletedStatus(){ 
      this.CS.getContestsByCompletedStatus().then((data)=>{
        this.contest = data;
      })
    }

    openContestDetails(contestID : string){
      this.router.navigate(['contests',contestID]) 
    }



}


