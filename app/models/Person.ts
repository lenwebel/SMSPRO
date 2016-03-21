
import * as enums from   '../enums/Enums' 
import {Contact} from   './Contact'
import { Control,Validators,AbstractControl} from 'angular2/common';
import {CommonValidator} from '../validators/common.validator';
import {ModelBase}  from './ModelBase'

export class Person extends ModelBase{
        public FirstName:AbstractControl;
        public MiddleName:AbstractControl;
        public LastName:AbstractControl;
        public DOB:AbstractControl ;
        public Gender:AbstractControl ;
        public PersontType:AbstractControl;
        public ContactDetails:Contact;
    

        constructor(){
            super();
            this.FirstName = new Control('');
            this.MiddleName = new Control('');
            this.LastName = new Control('');
            this.DOB = new Control('');
            this.ContactDetails = new Contact;   
        }

}