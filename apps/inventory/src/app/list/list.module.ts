import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {
  RebrickableModule,
  SearchComponent,
  SetTableComponent,
} from '@bbd-mfe-new/rebrickable';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    RebrickableModule,
    SetTableComponent,
    HttpClientModule,
    SearchComponent,
  ],
})
export class ListModule {}
