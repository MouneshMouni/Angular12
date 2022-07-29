import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-filter-textbox",
    template: `
    <b>Filter by</b> <input type="text" [(ngModel)]="filterCriteria"/>
    `
})

export class FilterTextboxComponent implements OnInit {
    private _filterCriteria: string = '';

    get filterCriteria(): string {
        return this._filterCriteria;
    }

    set filterCriteria(value: string) {
        this._filterCriteria = value;
        this.filterCriteriaChanged.emit(this._filterCriteria);
    }

@Output() filterCriteriaChanged : EventEmitter<string> =  new EventEmitter<string>();

    ngOnInit(): void {
      
    }
}