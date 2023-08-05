import { Component } from '@angular/core';
import {
  RebrickableApiService,
  SetListResponse,
} from '@bbd-mfe-new/rebrickable';
import { Observable } from 'rxjs';
@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  sets$: Observable<SetListResponse> = this.rebrickableApiService.getSets(
    1,
    10,
    'asc',
    'id'
  );
  constructor(private rebrickableApiService: RebrickableApiService) {}
}
