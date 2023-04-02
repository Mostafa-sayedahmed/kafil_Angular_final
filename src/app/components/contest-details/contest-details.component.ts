import { Component } from '@angular/core';
import { Icontest } from 'src/app/models/icontest';
// import { IcontestSection } from 'src/app/models/icontestsection';
import { ContestsService } from 'src/app/services/contests.service';


@Component({
  selector: 'app-contest-details',
  templateUrl: './contest-details.component.html',
  styleUrls: ['./contest-details.component.scss']
})
export class ContestDetailsComponent {
  contest:Icontest[]=[];
  
  constructor(private CS: ContestsService){

  }  
}
