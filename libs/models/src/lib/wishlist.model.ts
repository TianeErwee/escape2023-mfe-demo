import { Set } from './set.model';

export interface Wishlist {
    sets: Set[];
    user_id: string;
    wishlist_id: string;
    wishlist_name: string;
}