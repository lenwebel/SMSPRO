
import * as enums from '../enums/enums'
import {ModelBase} from './ModelBase';
import {Control} from 'angular2/common';

export class Address extends ModelBase{
        public AddressType:Control;
        public StreetNumber: Control;
        public StreetName: Control;
        public BuildingName:Control;
        public Suburb:Control;
        public City:Control;
        public State:Control;
        public Country: Control;
        
        constructor(){
            super();
            
            this.AddressType = new Control('');
            this.StreetNumber = new Control('');
            this.StreetName = new Control('');
            this.BuildingName = new Control('');
            this.Suburb = new Control('');
            this.City = new Control('');
            this.State = new Control('');
            this.Country = new Control('');
        }
        
        
    }