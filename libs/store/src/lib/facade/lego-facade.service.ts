import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LegoState } from '../state/lego.state';
import { Observable } from 'rxjs';
import { Inventory, Set, Wishlist } from '@bbd-mfe-new/models';
import {
  AddSetToInventory,
  AddSetToWishlist,
  GetInventory,
  GetWishlist,
  MoveSetToInventory,
} from '../selectors/lego.selectors';

@Injectable({
  providedIn: 'root',
})
export class LegoFacadeService {
  @Select(LegoState.userId) userId$!: Observable<string>;
  @Select(LegoState.wishlist) wishlist$!: Observable<Wishlist>;
  @Select(LegoState.inventory) inventory$!: Observable<Inventory>;
  constructor(private store: Store) {}

  getInventory(userId: string) {
    return this.store.dispatch(new GetInventory(userId));
  }

  getWishlist(userId: string) {
    this.store.dispatch(new GetWishlist(userId));
  }

  addSetToInventory(set: Set) {
    this.store.dispatch(new AddSetToInventory(set));
  }

  addSetToWishlist(set: Set) {
    this.store.dispatch(new AddSetToWishlist(set));
  }

  moveSetToInventory(set: Set) {
    this.store.dispatch(new MoveSetToInventory(set));
  }
}
