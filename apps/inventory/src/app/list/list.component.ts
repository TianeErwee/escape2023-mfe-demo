import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private http: HttpClient) {
    this.getInventory();
  }

  addSetToInventory(set: Set): void {
    this.http.post('/api/add-to-inventory', { user_id: '12345', set });
  }

  getInventory(): void {
    this.http.get('/api/get-inventory?user_id=12345').subscribe((result) => {
      console.log('Inventory retrieved', result);
    });
  }
}
