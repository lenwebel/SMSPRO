
import * as enums from '../enums/enums'
    
import { AbstractControl} from 'angular2/common';

export class Address{
        public AddressType:enums.AddressType;
        public StreetNumber: string;
        public StreetName: string;
        public BuildingName:string;
        public Suburb:string;
        public City:string;
        public State:string;
        public Country: string;
    }