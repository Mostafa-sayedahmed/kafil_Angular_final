import { Component , OnInit } from '@angular/core';
import { Iproject } from 'src/app/models/iproject';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projectsDetails',
  templateUrl: './projectsDetails.component.html',
  styleUrls: ['./projectsDetails.component.scss']
})
export class ProjectsDetailsComponent {
  project:Iproject[]=[];

  constructor(private PS: ProjectsService){}

        ngOnInit(){
        this.PS.getProjects().subscribe((data)=>{
          // console.log("projects",data);
          this.project = data;
        })
    }

}

