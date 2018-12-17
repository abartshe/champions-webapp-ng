import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import * as actions from '../../dashboard.actions';
import { DashboardState } from '../../dashboard.state';
import { Character } from '../../models/character';

@Component({
  selector: 'champions-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Select(DashboardState.characters) characters$: Observable<Character[]>;
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
    this.filterCharacters$ = this.characters$;
  }

  setFilters(event: { [key: string]: string }) {
    this.filterCharacters$ = this.characters$.pipe(
      take(1),
      map((characters: Character[]) =>
        characters.filter((character: Character) => {
          if (event.filterName === 'none') {
            return character;
          }
          if (event.filterName === 'affiliation' && character.affiliation === event.filter) {
            return character;
          }
          if (event.filterName === 'origin' && character.origin === event.filter) {
            return character;
          }
        })
      )
    );
    this.filterCharacters$.subscribe(log => console.log('why are you not working? ', log));
  }

}
