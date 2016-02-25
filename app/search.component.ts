import {Component} from 'angular2/core';

@Component({
    selector:"input-search",
    templateUrl:"templates/input-search.html"
})


interface SearchItem{
    
}

export class SearchComponent{
    public SearchString: string  = "remove this";
 
    public SearchResults: SearchItem[]; 
 
 
    
}