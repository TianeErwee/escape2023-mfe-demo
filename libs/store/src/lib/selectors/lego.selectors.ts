import { Set } from '@bbd-mfe-new/models';

export class AddSetToWishlist {
  static readonly type = '[Lego] Add set to wishlist';
  constructor(public set: Set) {}
}

export class AddSetToInventory {
  static readonly type = '[Lego] Add set to inventory';
  constructor(public set: Set) {}
}

export class MoveSetToInventory {
  static readonly type = '[Lego] Move set to inventory';
  constructor(public set: Set) {}
}

export class GetInventory {
  static readonly type = '[Lego] Get inventory';
  constructor(public userId: string) {}
}

export class GetWishlist {
  static readonly type = '[Lego] Get wishlist';
  constructor(public userId: string) {}
}
