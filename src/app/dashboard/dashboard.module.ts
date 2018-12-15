import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { DashboardState } from './dashboard.state';
import { DashboardTilesComponent } from './components/dashboard-tiles/dashboard-tiles.component';


const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTilesComponent,
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      DashboardState,
    ]),
    RouterModule.forChild(routes),
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
