
import * as enums from '../enums/enums'

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