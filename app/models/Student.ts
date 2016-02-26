
import * as enums from   '../enums/Enums' 
import {Person} from   './Person'
import {Class} from './Class'

export class Student extends Person {
             public YearLevel: enums.YearLevel;    
             public Class:Class;

    }