
import * as enums from   '../enums/Enums' 
import {Contact} from   './Contact'


export class Person{
        FirstName:string;
        MiddleName:string;
        LastName:string;
        DOB:Date;
        Gender:enums.Gender;
        PersontType:enums.PersonType;
        ContactDetails:Contact;
        waistsize:number;
    }