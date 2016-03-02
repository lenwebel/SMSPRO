import * as validation from '../interfaces/validationresult'
import {Control} from 'angular2/common'

export class CommonValidator {
  
  
 static startsWithNumber(control: Control): validation.ValidationResult { 
 
   if ( control.value != "" && !isNaN(control.value.charAt(0)) ){
      debugger;
     return { "startsWithNumber": true };
   }
 
   return null;
 }
    
}