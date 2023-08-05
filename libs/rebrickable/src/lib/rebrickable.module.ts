import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetTableComponent } from './components/set-table/set-table.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [SetTableComponent],
  exports: [SetTableComponent],
})
export class RebrickableModule {}
