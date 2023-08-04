import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './component/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule],
  exports: [ListComponent],
})
export class ListModule {}
