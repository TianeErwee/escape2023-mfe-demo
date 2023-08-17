import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegoFacadeService } from '@bbd-mfe-new/store';
import { ListViewComponent } from '@bbd-mfe-new/rebrickable';

@Component({
  selector: 'bbd-mfe-new-tile',
  standalone: true,
  imports: [CommonModule, ListViewComponent],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @ViewChild(ListViewComponent) listView?: ListViewComponent;
  wishlist$ = this.legoFacadeService.wishlist$;

  constructor(private legoFacadeService: LegoFacadeService) {
    this.legoFacadeService.getWishlist('12345');
  }

  onSetClicked(set: any) {
    this.legoFacadeService.moveSetToInventory(set);
    if (this.listView) {
      this.listView.setVisibleSets();
    }
  }
}
