import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from '@bbd-mfe-new/rebrickable';
import { LegoFacadeService } from '@bbd-mfe-new/store';
import { Observable } from 'rxjs';
import { CatApiComponent, CatApiService } from '@bbd-mfe-new/cat-api';

@Component({
  selector: 'bbd-mfe-new-tile',
  standalone: true,
  imports: [
    CommonModule,
    ListViewComponent,
    CatApiComponent
  ],
  providers: [LegoFacadeService, CatApiService],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  inventory$: Observable<any>;
  constructor(private legoFacadeService: LegoFacadeService) {
    this.inventory$ = this.legoFacadeService.inventory$;
    this.legoFacadeService.getInventory('12345');
  }
}
