import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Set } from '@bbd-mfe-new/models';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private http: HttpClient) {}

  async addSetToInventory(set: Set): Promise<void> {
    await firstValueFrom(this.http.post('/api/add-to-inventory', { user_id: '12345', set }));
  }
}
