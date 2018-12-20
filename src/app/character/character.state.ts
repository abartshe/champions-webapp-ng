import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import * as actions from './character.actions';
import { CoreService } from '../core/services/core.service';
import { Character } from '../core/models/Character';

export interface CharacterStateModel {
  characters: Character[];
}

@State<CharacterStateModel>({
  name: 'character',
  defaults: {
    characters: null,
  }
})
export class CharacterState {

  constructor(private coreService: CoreService) {
  }

  @Selector()
  static characters(state: CharacterStateModel) {
    return state.characters;
  }

  @Action(actions.QueryCharacters)
  queryCharacters(
    { patchState }: StateContext<CharacterStateModel>
  ) {
    return this.coreService.getCharacters().pipe(
      tap((res: Character[]) => {
        patchState({
          characters: res,
        });
      })
    );
  }
}
