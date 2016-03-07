import * as validation from '../interfaces/validationresult'
import {Control} from 'angular2/common'

export class CommonValidator {
  
 static required(control:Control,errorMessage?:string) :Object{
     if ( control.value === undefined || control.value===null || control.value === ""  ){
        return {"error": errorMessage || "Please provide a value"};
   }
   
   return null;
 } 
  
 static startsWithNumber(control: Control): validation.ValidationResult { 
 
   if ( control.value != "" && !isNaN(control.value.charAt(0)) ){
        
        return {"error": "Numbers are not accepted in the this field"};
   }
 
   return null;
 }
    
}