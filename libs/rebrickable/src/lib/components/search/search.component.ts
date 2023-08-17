import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetTableComponent } from '../set-table/set-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RebrickableApiService } from '../../services/rebrickable-api/rebrickable-api.service';
import { PageEvent } from '@angular/material/paginator';
import { Observable, shareReplay } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { SetListResponse } from '@bbd-mfe-new/models';
import { Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-search',
  standalone: true,
  imports: [
    CommonModule,
    SetTableComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('setTable') setTable!: SetTableComponent;

  @Output() setClicked = new EventEmitter<Set>();

  searchFieldValue = '';

  years = Array.from({ length: 2025 - 1951 }, (_, i) => 1950 + i);
  yearOptions = this.years.map((year) => {
    return { value: year, viewValue: year };
  });

  startYear = this.yearOptions[0].value;
  endYear = this.yearOptions[this.yearOptions.length - 1].value;

  pageSize = 10;

  sets$?: Observable<SetListResponse>;

  constructor(private rebrickableApiService: RebrickableApiService) {}

  search(pageEvent?: PageEvent): void {
    const page = pageEvent ? pageEvent.pageIndex + 1 : 1;
    this.sets$ = this.rebrickableApiService
      .getSets(
        page,
        this.pageSize,
        'asc',
        this.searchFieldValue,
        undefined,
        this.startYear,
        this.endYear
      )
      .pipe(shareReplay({ refCount: true }));
  }

  onSetClicked(set: Set): void {
    this.setClicked.emit(set);
  }
}
