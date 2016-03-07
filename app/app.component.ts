/* tslint:disable:no-string-literal */  
import { Component } from 'angular2/core';  
import {CommonValidator} from './validators/common.validator'
import {InputTextBox} from './inputcomponents/textbox.component'

import {Student} from './models/Student'

import {  
  FORM_DIRECTIVES,  
  FormBuilder,  
  ControlGroup,  
  Validators,  
  AbstractControl,
  Control
    
} from 'angular2/common';

@Component({  
  selector: 'my-app',  
  directives: [FORM_DIRECTIVES,InputTextBox],  
  templateUrl: 'templates/app.html'
})  
export class AppComponent {  
  myForm: ControlGroup;  
  
  studentModel: Student;

  
  firstName: AbstractControl;
  lastName :AbstractControl;
  
  constructor(fb: FormBuilder) {  
    
    this.studentModel = new Student();
    
 //   this.studentModel.FirstName = new Control('',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber]));
 //   this.studentModel.LastName = new Control('',CommonValidator.required);
 //  this.studentModel.MiddleName = new Control('')
   
    this.studentModel.ToKeyValuePair(this.studentModel);
    
    
    this.myForm = fb.group({
      'FirstName': this.studentModel.FirstName ,//['',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber])],
      'MiddleName' : this.studentModel.MiddleName, //['',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber])],
      'LastName' : this.studentModel.LastName //['',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber])],
     
    });
     
    
    //this.firstName = this.myForm.controls['firstName'];  
    //this.lastName = this.myForm.controls['lastName'];
}

  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }
}
