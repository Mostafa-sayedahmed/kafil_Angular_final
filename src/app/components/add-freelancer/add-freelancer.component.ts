import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.scss']
})
export class AddFreelancerComponent implements OnInit {
constructor(private service:CrudService){}
  ngOnInit(): void {
    this.service.addFreelancer();

  }

  onSubmit(event: any) {
    console.log( event.target.player.value);
    
 }


}
