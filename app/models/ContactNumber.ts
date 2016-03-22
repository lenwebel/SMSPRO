/// <reference path=".\Person.ts" />
import {ModelBase} from './ModelBase';
import {Control,AbstractControl} from 'angular2/common';

export class ContactNumber extends ModelBase{
    public NumberType: AbstractControl;
    public ContactNumber:AbstractControl;   
    
    constructor(){
        debugger;
        super();
        this.NumberType = new Control('')
        this.ContactNumber = new Control('')
    }
    
}