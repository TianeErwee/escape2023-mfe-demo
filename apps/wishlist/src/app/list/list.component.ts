import { Component } from '@angular/core';
import { Set } from '@bbd-mfe-new/models';
import { LegoFacadeService } from '@bbd-mfe-new/store';

@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  wishlist$ = this.legoFacadeService.wishlist$;

  constructor(private legoFacadeService: LegoFacadeService) {
    this.legoFacadeService.getWishlist('12345');
  }

  addSetToWishlist(set: Set): void {
    this.legoFacadeService.addSetToWishlist(set);
  }
}
