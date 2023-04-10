import { Component } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
// import { Projects } from 'src/app/models/projects';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss'],
})
export class AddprojectComponent {
  // Pro: Projects = {} as Projects;

  constructor(private fire: Firestore) {}

  // AddProject() {
  //   let projects = collection(this.fire, 'projects');
  //   addDoc(projects, this.Pro)
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }
}
