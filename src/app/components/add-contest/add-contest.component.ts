import { Component } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
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
    userName: JSON.parse(localStorage.getItem('user')!).displayName,
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(100)]],
    conditions: ['' , [Validators.required, Validators.minLength(100)]],
    sectionId: ['', [Validators.required]],
    // sectionName: ['', [Validators.required]],
    deliveryDuration: ['', [Validators.required]],
    contestDuration: ['', [Validators.required]],
    winnersNum:['', [Validators.required]],
    firstWinner:['', [Validators.required]],
    skills:[''],
    completed:[false],
  });
  
  contestDraft = JSON.parse(sessionStorage.getItem('contestDraft')!);

  ngOnInit() {
    this.contestDraft = this.contestDraft;

    this.CS.getContestSections().subscribe((data)=>{
      this.contestSections = data;
    })
  }

  addContest() {
    console.log(this.contestform.value);
    this.CS.addcontest(this.contestform.value);
    this.router.navigateByUrl('/contests')
  }

  saveDraft() {
    let data = JSON.stringify(this.contestform.value);
    sessionStorage.setItem('contestDraft', data);
    this.contestDraft = sessionStorage.getItem('contestDraft');
  }

  restoreDraft() {
    this.contestform.setValue({
      userId: this.contestDraft['userId'],
      userName: this.contestDraft['userName'],
      description: this.contestDraft['description'],
      title: this.contestDraft['title'],
      conditions: this.contestDraft['conditions'],
      sectionId: this.contestDraft['sectionId'],
      deliveryDuration: this.contestDraft['deliveryDuration'],
      contestDuration: this.contestDraft['contestDuration'],
      firstWinner: this.contestDraft['firstWinner'],
      winnersNum: this.contestDraft['winnersNum'],
      skills: this.contestDraft['skills'],
      completed: this.contestDraft['completed']
    });
  }

}


