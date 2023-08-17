import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { SetListResponse, Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-set-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './set-table.component.html',
  styleUrls: ['./set-table.component.scss'],
})
export class SetTableComponent {
  @Input() sets$?: Observable<SetListResponse>;
  @Input() sets: Set[] = [];
  @Input() length = 0;
  @Input() pageSize = 10;
  pageIndex = 0;
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  pageSizeOptions: number[] = [10, 20, 50, 100];
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @Output() setClicked: EventEmitter<Set> = new EventEmitter<Set>();

  displayedColumns: string[] = ['name', 'year', 'num_parts', 'set_num', 'img'];

  pageChanged(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.pageSizeChange.emit(this.pageSize);
    this.page.emit(event);
  }

  setClickedEvent(set: Set): void {
    this.setClicked.emit(set);
  }
}
