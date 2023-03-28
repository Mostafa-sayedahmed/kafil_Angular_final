import { Component , OnInit } from '@angular/core';
import { Icontest } from 'src/app/Models/icontest';
import { ContestsService } from 'src/app/services/contests.service';


@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent {


  contest:Icontest[]=[];
  
  constructor(private CS: ContestsService){

  }  


      ngOnInit(){
        this.CS.getContests().subscribe((data)=>{
          console.log("Contests",data);
          this.contest = data;
        })
    
          
    }
}


