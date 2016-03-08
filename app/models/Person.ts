
import * as enums from   '../enums/Enums' 
import {Contact} from   './Contact'
import { Control,Validators} from 'angular2/common';
import {CommonValidator} from '../validators/common.validator';
import {ModelBase}  from './ModelBase'

export class Person extends ModelBase{
        public FirstName:Control;
        public MiddleName:Control;
        public LastName:Control;
        public DOB:Control ;
        public Gender:Control ;
        public PersontType:Control;
        public ContactDetails:Contact;
    

        constructor(){
            super();
            this.FirstName = new Control('',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber]));
            this.MiddleName = new Control('');
            this.LastName = new Control('',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber]));
            this.DOB = new Control('',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber]));
            this.ContactDetails = new Contact;   
        }

}