import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {
  ListViewComponent,
  RebrickableModule,
  SearchComponent,
  SetTableComponent,
} from '@bbd-mfe-new/rebrickable';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AddToWishlistComponent } from './add-to-wishlist/add-to-wishlist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ListComponent, AddToWishlistComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    RebrickableModule,
    SetTableComponent,
    HttpClientModule,
    SearchComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ListViewComponent,
    MatDialogModule,
    MatCardModule
  ],
})
export class ListModule {}
