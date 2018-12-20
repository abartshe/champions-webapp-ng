import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take, filter, tap } from 'rxjs/operators';

import { Character } from '../../../core/models/character';
import { QueryCharacters } from '../../character.actions';
import { CharacterState } from '../../character.state';

@Component({
  selector: 'champions-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Select(CharacterState.characters) characters$: Observable<Character[]>;

  constructor(private activeRoute: ActivatedRoute,
              private store: Store) { }

  ngOnInit() {
    this.characters$.pipe(
      take(1),
      filter(character => character === null),
      tap(() => this.store.dispatch(new QueryCharacters()))
    ).subscribe();
  }

}
