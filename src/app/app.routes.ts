import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { LayoutComponent } from './layout/components/layout/layout.component';

export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
      { path: 'character/:id', loadChildren: 'app/character/character.module#CharacterModule'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
