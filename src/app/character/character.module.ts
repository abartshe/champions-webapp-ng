import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { CharacterComponent } from './components/character/character.component';
import { CharacterState } from './character.state';

const routes: Route[] = [
  {
    path: '',
    component: CharacterComponent
  }
];

@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([
      CharacterState,
    ]),
  ]
})
export class CharacterModule { }
