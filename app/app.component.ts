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
  
  constructor(fb: FormBuilder) {  
    
    this.studentModel = new Student();
    // this.studentModel.ComposeValidators() use this for validation.
    this.myForm = fb.group(this.studentModel)
    // field errors not bubbling to form try change field types form Control to AbstractControl.
    
}
 public GetFormErrors(){
         return JSON.stringify(this.myForm.errors);
 }
  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }
}
