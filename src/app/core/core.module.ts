import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupService } from './services/lookup.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    LookupService,
  ]
})
export class CoreModule { }
