import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LookupItem } from '../../../core/models';

@Component({
  selector: 'champions-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.scss']
})
export class DashboardFiltersComponent implements OnInit {
  @Input() affiliations: LookupItem[];
  @Input() origins: LookupItem[];
  @Output() filters: EventEmitter<{ [key: string]: string }> = new EventEmitter<{ [key: string]: string }>();

  constructor() { }

  ngOnInit() {
  }

  setFilter(value: string, filterName: string) {
    const filter = {
      filter: value,
      filterName: filterName
    };
    this.filters.emit(filter);
  }

}
