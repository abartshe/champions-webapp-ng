import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupService } from './services/lookup.service';
import { CoreService } from './services/core.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    LookupService,
    CoreService,
  ]
})
export class CoreModule { }
