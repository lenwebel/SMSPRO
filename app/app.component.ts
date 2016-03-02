
import {Component} from 'angular2/core';
import {InputTextBox} from './inputComponents/textbox.component'
import {NgForm,Control} from 'angular2/common'
import {CommonValidator} from './validators/common.validator'

@Component({
    selector:'my-app1',
    templateUrl: 'templates/app.html',
    directives: [InputTextBox]
})

export class AppComponent { 

    
    public model = {name: ""}
    public testcontrol = new Control('1 ',CommonValidator.startsWithNumber)
}

// interfaces!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export interface Hero{
    id:number;
    name:string;
}


var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
