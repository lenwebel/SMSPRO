
import * as enums from   '../enums/Enums' 
import {Contact} from   './Contact'
import { Control,Validators} from 'angular2/common';
import {CommonValidator} from '../validators/common.validator';
import {ModelBase}  from './ModelBase'

export class Person extends ModelBase{
        public FirstName:Control = new Control('',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber]));;
        public MiddleName:Control;
        public LastName:Control= new Control('',Validators.compose([CommonValidator.required,CommonValidator.startsWithNumber]));;;
        public DOB:Control = new Control('',Validators.compose([CommonValidator.required]));;;
        public Gender:enums.Gender ;
        public PersontType:enums.PersonType;
        public ContactDetails:Contact;
    }