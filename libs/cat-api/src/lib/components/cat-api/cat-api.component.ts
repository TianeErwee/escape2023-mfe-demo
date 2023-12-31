import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatApiService } from '../../services/cat-api.service';

@Component({
  selector: 'bbd-mfe-new-cat-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-api.component.html',
  styleUrls: ['./cat-api.component.scss'],
})
export class CatApiComponent {

  cats$ = this.catApiService.getImages();
  constructor(private catApiService: CatApiService) {}
}
