import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import * as actions from './dashboard.actions';
import { CoreService } from '../core/services/core.service';
import { LookupService } from '../core/services/lookup.service';
import { Character } from '../core/models/Character';
import { LookupItem } from '../core/models/Lookup';

export interface DashboardStateModel {
  characters: Character[];
  affiliationFilter: string;
  originFilter: string;
  affiliations: LookupItem[];
  origins: LookupItem[];
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    characters: null,
    affiliationFilter: '',
    originFilter: '',
    affiliations: null,
    origins: null,
  }
})
export class DashboardState {

  constructor(private coreService: CoreService,
              private lookupService: LookupService) {
  }

  @Selector()
  static filteredCharacters(state: DashboardStateModel) {
    const affiliationFilter = state.affiliationFilter;
    const originFilter = state.originFilter;

    return state.characters
      .filter(character =>
        affiliationFilter !== ''
          ? character.affiliation === affiliationFilter
          : character
      )
      .filter(character =>
        originFilter !== ''
          ? character.origin === originFilter
          : character
      );
  }

  @Selector()
  static affiliations(state: DashboardStateModel) {
    return state.affiliations;
  }

  @Selector()
  static origins(state: DashboardStateModel) {
    return state.origins;
  }

  @Action(actions.QueryCharacters)
  queryCharacters(
    { patchState }: StateContext<DashboardStateModel>
  ) {
    return this.coreService.getCharacters().pipe(
      tap((res: Character[]) => {
        patchState({
          characters: res,
        });
      })
    );
  }

  @Action(actions.UpdateAffiliationFilter)
  updateAffiliationFilter(
    { patchState }: StateContext<DashboardStateModel>,
    { filter }: actions.UpdateOriginFilter
  ) {
    patchState({
      affiliationFilter: filter
    });
  }

  @Action(actions.UpdateOriginFilter)
  updateOriginFilter(
    { patchState }: StateContext<DashboardStateModel>,
    { filter }: actions.UpdateOriginFilter
  ) {
    patchState({
      originFilter: filter
    });
  }

  @Action(actions.QueryAffiliations)
  queryAffiliations(
    { patchState }: StateContext<DashboardStateModel>
  ) {
    return this.lookupService.getLookupItem('affiliations').pipe(
      tap((res: LookupItem[]) => {
        patchState({
          affiliations: res,
        });
      })
    );
  }

  @Action(actions.QueryOrigins)
  queryOrigins(
    { patchState }: StateContext<DashboardStateModel>
  ) {
    return this.lookupService.getLookupItem('origins').pipe(
      tap((res: LookupItem[]) => {
        patchState({
          origins: res,
        });
      })
    );
  }
}
