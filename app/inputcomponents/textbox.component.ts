
import {Input,Output,Component} from 'angular2/core';

import {  
  //FORM_DIRECTIVES,  
  //FormBuilder,  
  //ControlGroup,  
  //Validators,  
  AbstractControl
    
} from 'angular2/common';


@Component({
    selector:'input-textbox',
    templateUrl: 'templates/input-templates/input-textbox.html'
    })


export class InputTextBox {
    
   @Input()  public value:string;
   
   @Input() public id:string;
   
   @Input() public label:string;
   
   @Input() public ctl:AbstractControl;
   
   
   public constructor(){
        
        
    }
    
    public  GetErrors() {
        
        let arr = [];
        
        for(let key in this.ctl.errors){
            arr.push(this.ctl.errors[key]);
        }
        return arr;
    }   
 
 public Print() {
     console.log(this.ctl) 
    }
}
