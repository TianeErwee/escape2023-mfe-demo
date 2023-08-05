import { Component, Input } from '@angular/core';
import { Set } from '../../models/set.model';

@Component({
  selector: 'bbd-mfe-new-set-table',
  templateUrl: './set-table.component.html',
  styleUrls: ['./set-table.component.scss'],
})
export class SetTableComponent {
  @Input() sets: Set[] = [];
  displayedColumns: string[] = ['name', 'year', 'num_parts', 'set_num', 'img'];
}
