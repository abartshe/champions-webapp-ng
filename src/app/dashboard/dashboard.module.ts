import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { DashboardComponent } from './components/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { DashboardState } from './dashboard.state';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      DashboardState,
    ]),
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
