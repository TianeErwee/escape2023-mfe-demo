import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-add-to-wishlist',
  templateUrl: './add-to-wishlist.component.html',
  styleUrls: ['./add-to-wishlist.component.scss'],
})
export class AddToWishlistComponent {
  wishlists: any[] = this.data.wishlists;
  set: Set = this.data.set;

  constructor(
    public dialogRef: MatDialogRef<AddToWishlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { set: Set, wishlists: any[] }
  ) {}

  addSetToWishlist(wishlistId: string): void {
    this.dialogRef.close(wishlistId);
  }
}
