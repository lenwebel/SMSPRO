
import {Input,Output,Component} from 'angular2/core';


@Component({
    selector:'input-textbox',
    templateUrl: 'templates/input-templates/input-textbox.html'
    })


export class InputTextBox {
    
   @Input() public value:string;
   
   @Input() public id:string;
   
   @Input() public label:string = 'thing';
       
}
