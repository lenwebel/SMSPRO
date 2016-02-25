<<<<<<< HEAD
import {Component} from 'angular2/core';

@Component({
	selector: 'input-search',
	templateUrl: 'templates/search.html'
})

export class AppComponent { 
    
    public search:string = "Some string";
           
    
}

 
=======

import {Component} from 'angular2/core';


@Component({
    selector:'my-app1',
    templateUrl: 'templates/create-person.html'
})




export class AppComponent { 

    public heroes = HEROES;
    public title = 'Tour of Heros';
    
    public hero :  Hero = {
         id:1,
         name:  'Windstorm'
    };
    
    private _hide:boolean;
    
    public get Hide():boolean{
        this._hide = !this._hide;
        return this._hide;
    }

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
>>>>>>> 1e660ef3fb97f0ec73e131d8f6df1344d23202fb
