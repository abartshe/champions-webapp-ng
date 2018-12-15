import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { QueryChampions } from '../../dashboard.actions';
import { DashboardState } from '../../dashboard.state';
import { Champion } from '../../models/Champion';

@Component({
  selector: 'champions-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Select(DashboardState.champions) champions$: Observable<Champion[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch([
      new QueryChampions(),
    ]);
  }

}
