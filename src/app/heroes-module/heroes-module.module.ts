import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule
  ],
  declarations: [
    HeroesComponent
  ],
  providers: [ ]
})
export class HeroesModule { }
