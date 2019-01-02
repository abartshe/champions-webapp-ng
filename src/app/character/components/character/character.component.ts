import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Character } from '../../../core/models/character';
import { InitializeCharacter } from '../../character.actions';
import { CharacterState } from '../../character.state';


@Component({
  selector: 'champions-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Select(CharacterState.characters) characters$: Observable<Character[]>;

  character$: Observable<Character>;

  constructor(private activeRoute: ActivatedRoute,
              private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new InitializeCharacter());

    this.character$ = combineLatest(
      this.activeRoute.params,
      this.characters$.pipe(filter(x => x !== null))
    ).pipe(
      map(([param, characters]) => {
        return characters.find(character => character.id === Number(param.id));
      })
    );
  }

}
