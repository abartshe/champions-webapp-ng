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
  @Output() affiliationFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() originFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setAffiliationFilter(value: string) {
    this.affiliationFilter.emit(value);
  }

  setOriginFilter(value: string) {
    this.originFilter.emit(value);
  }

}
