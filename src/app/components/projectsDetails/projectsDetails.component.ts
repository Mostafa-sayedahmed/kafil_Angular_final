import { Component , OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projectsDetails',
  templateUrl: './projectsDetails.component.html',
  styleUrls: ['./projectsDetails.component.scss']
})
export class ProjectsDetailsComponent {

  constructor(private PS: ProjectsService){}

        ngOnInit(){}
    }



