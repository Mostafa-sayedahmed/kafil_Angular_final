import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContestsService } from 'src/app/services/contests.service';
import { IcontestSection } from 'src/app/models/icontestsection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.scss']
})
export class AddContestComponent {

  contestSections:IcontestSection[]=[];

  userId : string = '';

  constructor(private formbuilder: FormBuilder,private CS: ContestsService ,private router:Router) {}
  contestform = this.formbuilder.group({
    userId: JSON.parse(localStorage.getItem('user')!).uid,
    title: [''],
    description: [''],
    conditions: [''],
    sectionId: [''],
    deliveryDuration: [''],
    contestDuration: [''],
    winnersNum:[''],
    firstWinner:[''],
    skills:['']
  });
  ngOnInit() {
    this.CS.getContestSections().subscribe((data)=>{
      this.contestSections = data;
    })
  }

  addContest() {
    console.log(this.contestform.value);
    this.CS.addcontest(this.contestform.value);
    this.router.navigateByUrl('/contests')
  }


}
