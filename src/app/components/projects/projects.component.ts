import { Component ,OnInit} from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { project } from 'src/app/models/iproject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  ListOfprojects : project [] =[]
  constructor(private projects :ProjectsService ) { }
  
  ngOnInit():void{

   this.projects.getProjects().subscribe( res => {this.ListOfprojects = res ;console.log(res)})

  }

}
