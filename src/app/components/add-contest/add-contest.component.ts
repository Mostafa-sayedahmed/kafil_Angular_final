import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContestsService } from 'src/app/services/contests.service';
import { IcontestSection } from 'src/app/models/icontestsection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.scss'],
})
export class AddContestComponent {
  contestSections: IcontestSection[] = [];

  userId: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private CS: ContestsService,
    private router: Router
  ) {}
  contestform = this.formbuilder.group({
    userId: JSON.parse(localStorage.getItem('user')!).uid,
    title: [''],
    description: [''],
    conditions: [''],
    sectionId: [''],
    deliveryDuration: [''],
    contestDuration: [''],
    winnersNum: [''],
    firstWinner: [''],
    skills: [''],
    completed: [false],
    accepted: [true],
    comment: Math.floor(Math.random() * (300 - 1 + 1)) + 1,
    Posts: Math.floor(Math.random() * (3000 - 1 + 1)) + 1,
    Views: Math.floor(Math.random() * (3000 - 1 + 1)) + 1,
    contestants: Math.floor(Math.random() * (200 - 1 + 1)) + 1,
  });
  ngOnInit() {
    this.CS.getContestSections().subscribe((data) => {
      this.contestSections = data;
    });
  }

  addContest() {
    console.log(this.contestform.value);
    this.CS.addcontest(this.contestform.value);
    // this.router.navigateByUrl('/contests');

    // this.contestform.setValue({
    //   userId: '',
    //   userName: '',
    //   userImg: '',
    //   description: '',
    //   title: '',
    //   conditions: '',
    //   sectionId: '',
    //   deliveryDuration: '',
    //   contestDuration: '',
    //   firstWinner: '',
    //   winnersNum: '',
    //   skills: '',
    //   completed: false,
    //   accepted:true,
    //   comment: 0,
    //   Posts: 0,
    //   Views: 0,
    //   contestants: 0
    // });
  }

  // saveDraft() {
  //   let data = JSON.stringify(this.contestform.value);
  //   localStorage.setItem('contestDraft', data);
  //   this.contestDraft = localStorage.getItem('contestDraft');
  // }

  // restoreDraft() {
  //   this.contestform.setValue({
  //     userId: this.contestDraft['userId'],
  //     userName: this.contestDraft['userName'],
  //     userImg: this.contestDraft['userImg'],
  //     description: this.contestDraft['description'],
  //     title: this.contestDraft['title'],
  //     conditions: this.contestDraft['conditions'],
  //     sectionId: this.contestDraft['sectionId'],
  //     deliveryDuration: this.contestDraft['deliveryDuration'],
  //     contestDuration: this.contestDraft['contestDuration'],
  //     firstWinner: this.contestDraft['firstWinner'],
  //     winnersNum: this.contestDraft['winnersNum'],
  //     skills: this.contestDraft['skills'],
  //     completed: this.contestDraft['completed'],
  //     accepted: this.contestDraft['accepted'],
  //     comment:this.contestDraft['comment'] | Math.floor(Math.random() * (300 - 1 + 1)) + 1,
  //     Posts:this.contestDraft['posts'] | Math.floor(Math.random() * (3000 - 1 + 1)) + 1,
  //     Views:this.contestDraft['views'] | Math.floor(Math.random() * (3000 - 1 + 1)) + 1,
  //     contestants: this.contestDraft["contestants"] | Math.floor(Math.random() * (200 - 1 + 1)) + 1,
  //   });

  // }
}
