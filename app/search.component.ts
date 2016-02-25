/// <reference path="\interfaces\ISearchItem.ts" />



import {Component} from 'angular2/core';

@Component({
    selector:"input-search",
    templateUrl:"templates/input-search.html"
})



export class SearchComponent{
    public SearchString: string  = "remove this";
    public SearchResults: ISearchItem[]; 
    
}

