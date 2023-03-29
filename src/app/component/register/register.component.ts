import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userFormGroup: FormGroup;

  constructor(private formbuilder : FormBuilder){
    
      this.userFormGroup = this.formbuilder.group({
        FirstName :['',[Validators.required,Validators.minLength(3)]],
        LastName :['',[Validators.required,Validators.minLength(4)]],
        Gmail:['',[Validators.required,Validators.pattern("/[A-Za-z]{3}@(gmail|outlook).com/i")]],
        Password : ['',[Validators.required,Validators.minLength(4),Validators.pattern('/([A-Z]{1,})([a-z]{1,}).(@|#|$)/')]],
        RePassword : ['',[Validators.required]],
       
      })
  }




}
