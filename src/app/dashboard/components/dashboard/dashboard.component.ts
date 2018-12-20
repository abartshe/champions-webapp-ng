import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import * as actions from '../../dashboard.actions';
import { DashboardState } from '../../dashboard.state';
import { Character } from '../../../core/models/character';

@Component({
  selector: 'champions-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Select(DashboardState.filteredCharacters) filteredCharacters$: Observable<Character[]>;
  @Select(DashboardState.affiliations) affiliations$: Observable<Character[]>;
  @Select(DashboardState.origins) origins$: Observable<Character[]>;

  filterCharacters$: Observable<Character[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch([
      new actions.QueryCharacters(),
      new actions.QueryAffiliations(),
      new actions.QueryOrigins(),
    ]);
  }

  setAffiliationFilter(filter: string) {
    filter
      ? this.store.dispatch(new actions.UpdateAffiliationFilter(filter))
      : this.store.dispatch(new actions.UpdateAffiliationFilter(''));
  }

  setOriginFilter(filter: string) {
    filter
      ? this.store.dispatch(new actions.UpdateOriginFilter(filter))
      : this.store.dispatch(new actions.UpdateOriginFilter(''));
  }

}
