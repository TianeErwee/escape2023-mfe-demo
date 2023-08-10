import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-list-view',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent {
  @Input() title = '';
  @Input() sets: Set[] = [];
}
