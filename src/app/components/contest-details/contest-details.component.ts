import { Component , OnInit } from '@angular/core';
import { Icontest } from 'src/app/models/icontest';
// import { IcontestSection } from 'src/app/models/icontestsection';
import { ContestsService } from 'src/app/services/contests.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.scss']
})
export class ContestDetailsComponent implements OnInit {
  contest:Icontest[]=[];
  currentContestID:string = '';
  // selectedContest: Icontest | undefined = undefined;
  constructor(private CS: ContestsService , private activatedRoute: ActivatedRoute){

  }  

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramMap =>{

    this.currentContestID = (paramMap.get('contestID')) ? `${paramMap.get('contestID')}` : " ";

    console.log(this.CS.getContestById(this.currentContestID));

    let foundContest =  this.CS.getContestById(this.currentContestID);

    console.log(foundContest);

    // this.selectedContest = foundContest ;

  });

}

}
