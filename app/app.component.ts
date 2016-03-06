/* tslint:disable:no-string-literal */  
import { Component } from 'angular2/core';  
import {CommonValidator} from './validators/common.validator'

import {  
  FORM_DIRECTIVES,  
  FormBuilder,  
  ControlGroup,  
  Validators,  
  AbstractControl,
    
} from 'angular2/common';

@Component({  
  selector: 'my-app',  
  directives: [FORM_DIRECTIVES],  
  templateUrl: 'templates/app.html'
})  
export class AppComponent {  
  myForm: ControlGroup;  
  sku: AbstractControl;

  constructor(fb: FormBuilder) {  
    this.myForm = fb.group({  
      'sku':  ['', CommonValidator.startsWithNumber]  
    });

    this.sku = this.myForm.controls['sku'];  
  }

  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }
}
