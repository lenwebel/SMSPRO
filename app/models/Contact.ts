
import {ContactNumber} from './ContactNumber';
import {Address} from './Address';
import {ModelBase} from './ModelBase';
import {Control,AbstractControl} from 'angular2/common';

    export class Contact extends ModelBase{
            public ContactNumber:ContactNumber[];
            public Address:Address[] ;
            public Email: AbstractControl;
        
    
    constructor(){
        super();
        this.Email = new Control('');
      }

}