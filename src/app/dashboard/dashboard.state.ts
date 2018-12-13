import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import * as models from './models/Champion';
import * as actions from './dashboard.actions';
import { DashboardService } from './services/dashboard.service';

export interface DashboardStateModel {
  champions: models.Champion[];
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    champions: null,
  }
})
export class DashboardState {

  constructor(private dashboardService: DashboardService) {
  }

  @Selector()
  static champions(state: DashboardStateModel) {
    return state.champions;
  }

  @Action(actions.QueryChampions)
  queryChammpions(
    { patchState }: StateContext<DashboardStateModel>
  ) {
    return this.dashboardService.getChampions().pipe(
      tap((res: models.Champion[]) => {
        patchState({
          champions: res,
        });
      })
    );
  }
}
