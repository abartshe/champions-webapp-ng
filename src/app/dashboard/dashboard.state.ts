import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import * as actions from './dashboard.actions';
import { DashboardService } from './services/dashboard.service';
import { LookupService } from '../core/services/lookup.service';
import { Character } from './models/Character';
import { LookupItem } from '../core/models/Lookup';

export interface DashboardStateModel {
  characters: Character[];
  affiliations: LookupItem[];
  origins: LookupItem[];
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    characters: null,
    affiliations: null,
    origins: null,
  }
})
export class DashboardState {

  constructor(private dashboardService: DashboardService,
              private lookupService: LookupService) {
  }

  @Selector()
  static characters(state: DashboardStateModel) {
    return state.characters;
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
  queryChammpions(
    { patchState }: StateContext<DashboardStateModel>
  ) {
    return this.dashboardService.getCharacters().pipe(
      tap((res: Character[]) => {
        patchState({
          characters: res,
        });
      })
    );
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
