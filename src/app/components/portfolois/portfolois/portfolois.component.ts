import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iportfolois } from 'src/app/models/iportfolois';
import { PortfoloisService } from 'src/app/services/portfolois.service';

@Component({
  selector: 'app-portfolois',
  templateUrl: './portfolois.component.html',
  styleUrls: ['./portfolois.component.scss']
})
export class PortfoloisComponent {

  portfolois:Iportfolois[]=[]
constructor(private PS:PortfoloisService,private rout:Router){}

  ngOnInit(){
    
    this.PS.getallportfolois().subscribe((data)=>{
      // console.log("Contests",data);
      this.portfolois = data;
      console.log( data);
    })

  }

  goToDetails(id:any){
this.rout.navigate(['detailsPortfolois',id])
  }

  
}
