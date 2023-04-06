import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfoloisService } from 'src/app/services/portfolois.service';

@Component({
  selector: 'app-details-portfolois',
  templateUrl: './details-portfolois.component.html',
  styleUrls: ['./details-portfolois.component.scss']
})
export class DetailsPortfoloisComponent {
 
  IdPorfoloi:any={}
  constructor(private route:ActivatedRoute ,private PS:PortfoloisService){}

ngOnInit():void{
let id = this.route.snapshot.paramMap.get('id')
this.PS.getportfoloi(id).subscribe((data=>{
this.IdPorfoloi=data;
console.log(data);


}))

}

}
