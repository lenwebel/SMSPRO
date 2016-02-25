/// <reference path="\interfaces\ISearchItem.ts" />



import {Component} from 'angular2/core';
import {ISearchItem} from './interfaces/ISearchItem'

@Component({
    selector:"input-search",
    templateUrl:"templates/input-search.html"
})



export class SearchComponent{
    
    public SearchString: string;
    public SearchResults: ISearchItem[]; 
    
}

