import {AbstractControl,Validators,Validator} from 'angular2/common';

export class ModelBase{
    
 public  ComposeValidators(property:AbstractControl,validator:any[]):void {
      property.validator = Validators.compose(validator)
 }
 

public IsVisible(property:AbstractControl){  }
 

}