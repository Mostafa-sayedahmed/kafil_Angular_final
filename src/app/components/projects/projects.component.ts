import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';





@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
      LisT : Projects [] =[]
     constructor(private projects :ProjectsService ) { }
     ngOnInit():void{
      this.projects.getallprojects().subscribe(res => {this.LisT = res ;console.log(res)})

     }
      // getData(){
      //   this.projects.getallprojects().subscribe(res => {this.LisT = res ;console.log(res)})
      // }
     


}
