import { Component , OnInit } from '@angular/core';
import { Icontest } from 'src/app/models/icontest';
// import { IcontestSection } from 'src/app/models/icontestsection';
import { ContestsService } from 'src/app/services/contests.service';
import { ActivatedRoute} from '@angular/router';

import { FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.scss']
})
export class ContestDetailsComponent implements OnInit {
  currentDate = new Date();
  endDate:string = '';
  daysRemaining:number = 0;
  futureDate:string = '';
  contest:Icontest[]=[];
  currentContestID:string = '';
  selectedContest: Icontest | undefined = undefined;
  constructor(private CS: ContestsService , private activatedRoute: ActivatedRoute){

  }  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramMap =>{

    this.currentContestID = (paramMap.get('contestID')) ? `${paramMap.get('contestID')}` : " ";

   this.CS.getContestById(this.currentContestID).then(res=>{
      console.log(res);
      this.selectedContest = res ;
      
      if(res.contestDuration == "شهر"){
        let futureDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1 );
        this.endDate = futureDate.toISOString().substring(0, 10);
        this.daysRemaining = Math.ceil((futureDate.getTime() - this.currentDate.getTime())/ (1000 * 60 * 60 * 24));
      }else if(res.contestDuration == "شهرين"){
        let futureDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 2 );
        this.endDate = futureDate.toISOString().substring(0, 10);
        this.daysRemaining = Math.ceil((futureDate.getTime() - this.currentDate.getTime())/ (1000 * 60 * 60 * 24));
      }else{
        let futureDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 3 );
        this.endDate = futureDate.toISOString().substring(0, 10);
        this.daysRemaining = Math.ceil((futureDate.getTime() - this.currentDate.getTime())/ (1000 * 60 * 60 * 24));
      }
       
    });


   
  });

}

// addComment(comment: string) {
//   this.CS.addComment(comment);
// }



}
