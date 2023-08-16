import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Set } from '@bbd-mfe-new/models';
import { Subscription, firstValueFrom, switchMap } from 'rxjs';
import { AddToWishlistComponent } from './add-to-wishlist/add-to-wishlist.component';

@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy {
  wishlistName = '';
  wishlists: any[] = [];
  wishlists$ = this.http.get<any>('/api/get-wishlists-by-user?user_id=12345');
  subscriptions = new Subscription();
  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.subscriptions.add(
      this.wishlists$.subscribe((wishlists) => {
        console.log(wishlists);
        this.wishlists = wishlists;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addSetToWishlist(set: Set): void {
    console.log(set);
    const dialogRef = this.dialog.open(AddToWishlistComponent, {
      data: {
        set,
        wishlists: this.wishlists,
      },
    });

    const closeSub = dialogRef
      .afterClosed()
      .pipe(
        switchMap((result) =>
          this.http.post<any>('/api/add-to-wishlist', {
            wishlist_id: result,
            user_id: '12345',
            set,
          })
        )
      )
      .subscribe(() => {
        closeSub.unsubscribe();
      });
  }
  // async createWishlist(name: string): Promise<void> {
  //   {
  //     await firstValueFrom(
  //       this.http.post<any>('/api/create-wishlist', {
  //         wishlist_name: name,
  //         user_id: '12345',
  //       })
  //     );
  //   }
  // }
}
