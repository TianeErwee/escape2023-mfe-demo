import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Set } from '../../models/set.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'bbd-mfe-new-set-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './set-table.component.html',
  styleUrls: ['./set-table.component.scss'],
})
export class SetTableComponent {
  @Input() sets: Set[] = [];
}
