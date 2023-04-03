import { Component } from '@angular/core';
import { Iportfolois } from 'src/app/models/iportfolois';
import { PortfoloisService } from 'src/app/services/portfolois.service';

@Component({
  selector: 'app-portfolois',
  templateUrl: './portfolois.component.html',
  styleUrls: ['./portfolois.component.scss']
})
export class PortfoloisComponent {

  portfolois:Iportfolois[]=[]
constructor(private PS:PortfoloisService){}

  ngOnInit(){
    
    this.PS.getallportfolois().subscribe((data)=>{
      // console.log("Contests",data);
      this.portfolois = data;
      console.log( data);
    })

   let data= this.PS.getportfolois()
  }

  
}
