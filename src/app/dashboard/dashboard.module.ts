import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import * as material from '@angular/material';
import { NgxsModule } from '@ngxs/store';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardState } from './dashboard.state';
import { DashboardTilesComponent } from './components/dashboard-tiles/dashboard-tiles.component';
import { DashboardFiltersComponent } from './components/dashboard-filters/dashboard-filters.component';


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
    DashboardFiltersComponent,
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      DashboardState,
    ]),
    material.MatFormFieldModule,
    material.MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
