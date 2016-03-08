/// <reference path=".\Person.ts" />
import {ModelBase} from './ModelBase';
import {Control} from 'angular2/common';

export class ContactNumber extends ModelBase{
    public NumberType: Control;
    public ContactNumber:Control;   
    
    constructor(){
        super();
        this.NumberType = new Control('')
        this.ContactNumber = new Control('')
    }
    
}