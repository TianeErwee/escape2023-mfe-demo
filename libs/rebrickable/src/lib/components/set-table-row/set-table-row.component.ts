import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Set } from '@bbd-mfe-new/models';
@Component({
  selector: 'bbd-mfe-new-set-table-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-table-row.component.html',
  styleUrls: ['./set-table-row.component.scss'],
})
export class SetTableRowComponent {
  @Input() set?: Set;
}
