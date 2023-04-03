import { Component , OnInit } from '@angular/core';
import { Icontest } from 'src/app/models/icontest';
import { IcontestSection } from 'src/app/models/icontestsection';
import { ContestsService } from 'src/app/services/contests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent {


  contest:Icontest[]=[];
  contestSections:IcontestSection[]=[];
  
  constructor(private CS: ContestsService,private router:Router){

  }  

  ngOnInit(){
    this.GetAllContests();
    this.GetAllContestSections(); 

  }


  GetAllContests(){ 
      this.CS.getContests().subscribe((data)=>{
        this.contest = data;
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

    ChangeContestOpenStatus(){ 
      this.CS.getContestsByOpenStatus().then((data)=>{
        this.contest = data;
      })
    }

    openContestDetails(contestID : string){
      this.router.navigate(['contests',contestID]) 
    }

}


