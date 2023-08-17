import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory, Set, Wishlist } from '@bbd-mfe-new/models';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import {
  AddSetToInventory,
  AddSetToWishlist,
  GetInventory,
  GetWishlist,
  MoveSetToInventory,
} from '../selectors/lego.selectors';
import { combineLatest, map, of, tap } from 'rxjs';

export interface LegoStateModel {
  userId: string | undefined;
  wishlist: Wishlist | undefined;
  inventory: Inventory | undefined;
}

export const LEGO_STATE_TOKEN = new StateToken<LegoStateModel>('lego');

const defaultState: LegoStateModel = {
  userId: '12345',
  wishlist: undefined,
  inventory: undefined,
};

@State<LegoStateModel>({
  name: LEGO_STATE_TOKEN,
  defaults: defaultState,
})
@Injectable()
export class LegoState {
  @Selector()
  static userId(state: LegoStateModel) {
    return state.userId;
  }

  @Selector()
  static wishlist(state: LegoStateModel) {
    return state.wishlist;
  }

  @Selector()
  static inventory(state: LegoStateModel) {
    return state.inventory;
  }

  constructor(private http: HttpClient) {}

  @Action(AddSetToWishlist)
  addSetToWishlist(
    ctx: StateContext<LegoStateModel>,
    action: AddSetToWishlist
  ) {
    const state = ctx.getState();
    const wishlist = state.wishlist;
    const set = action.set;
    if (wishlist) {
      wishlist.sets.push(action.set);
      ctx.setState({
        ...state,
        wishlist,
      });

      return this.http.post<any>('/api/add-to-wishlist', {
        wishlist_id: wishlist.wishlist_id,
        user_id: '12345',
        set,
      });
    } else {
      return of(null);
    }
  }

  @Action(AddSetToInventory)
  addSetToInventory(
    ctx: StateContext<LegoStateModel>,
    action: AddSetToInventory
  ) {
    const state = ctx.getState();
    const inventory = state.inventory;
    const set = action.set;
    if (inventory) {
      inventory.sets.push(set);
      ctx.setState({
        ...state,
        inventory,
      });

      return this.http.post<any>('/api/add-to-inventory', {
        user_id: '12345',
        set,
      });
    } else {
      return of(null);
    }
  }

  @Action(GetInventory)
  getInventory(ctx: StateContext<LegoStateModel>, action: GetInventory) {
    const state = ctx.getState();
    if (state.inventory) {
      return of(state.inventory);
    } else {
      return this.http
        .get<any>('/api/get-inventory?user_id=' + action.userId)
        .pipe(
          tap((inventory) => {
            const currState = ctx.getState();
            console.log(currState);
            ctx.patchState({
              ...currState,
              inventory,
            });
          }),
          map((inventory) => {
            return inventory;
          })
        );
    }
  }

  @Action(GetWishlist)
  getWishlist(ctx: StateContext<LegoStateModel>, action: GetWishlist) {
    const state = ctx.getState();
    if (state.wishlist) {
      return of(state.wishlist);
    } else {
      return this.http
        .get<any>('/api/get-wishlists-by-user?user_id=' + action.userId)
        .pipe(
          tap((wishlists) => {
            const currState = ctx.getState();
            console.log(currState);
            ctx.patchState({
              ...currState,
              wishlist: wishlists[0],
            });
          })
        );
    }
  }

  @Action(MoveSetToInventory)
  moveSetToInventory(
    ctx: StateContext<LegoStateModel>,
    action: MoveSetToInventory
  ) {
    const state = ctx.getState();
    const inventory = state.inventory;
    const wishlist = state.wishlist;
    const set = action.set;
    if (inventory && wishlist) {
      inventory.sets.push(set);
      wishlist.sets = wishlist.sets.filter((s) => s.set_num !== set.set_num);
      ctx.setState({
        ...state,
        inventory,
        wishlist,
      });
      
      return this.http.post<any>('/api/move-to-inventory', {
        user_id: '12345',
        wishlist_id: wishlist.wishlist_id,
        set
      });
    } else {
      return of(null);
    }
  }
}
