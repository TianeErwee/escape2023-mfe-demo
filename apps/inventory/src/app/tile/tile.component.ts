import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from '@bbd-mfe-new/rebrickable';
import { HttpClient } from '@angular/common/http';
import { Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-tile',
  standalone: true,
  imports: [CommonModule, ListViewComponent],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  sets$ = this.http.get<{ sets: Set[] }>('/api/get-inventory?user_id=12345');
  constructor(private http: HttpClient) {}
}
