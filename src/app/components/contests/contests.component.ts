import { Component , OnInit } from '@angular/core';
import { Icontest } from 'src/app/models/icontest';
import { IcontestSection } from 'src/app/models/icontestsection';
import { ContestsService } from 'src/app/services/contests.service';


@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent {


  contest:Icontest[]=[];
  contestSections:IcontestSection[]=[];
  
  constructor(private CS: ContestsService){

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

    
}


