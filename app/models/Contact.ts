
import {ContactNumber} from './ContactNumber';
import {Address} from './Address';
import {ModelBase} from './ModelBase';
import {Control} from 'angular2/common';

    export class Contact extends ModelBase{
            public ContactNumber:ContactNumber[];
            public Address:Address[] ;
            public Email: Control;
        
    
    constructor(){
        super();
        this.Email = new Control('');
      
        
      }

}