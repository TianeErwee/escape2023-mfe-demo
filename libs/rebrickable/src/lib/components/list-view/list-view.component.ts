import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Set } from '@bbd-mfe-new/models';

@Component({
  selector: 'bbd-mfe-new-list-view',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements AfterViewInit {
  @Input() title = '';
  @Input() sets: Set[] = [];

  @Output() setClicked = new EventEmitter<Set>();

  visibleSets: Set[] = [];
  visibleIndices: number[] = [];

  constructor(private cdkRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.visibleIndices = [0, 1, 2];
    this.setVisibleSets();
  }

  next() {
    this.visibleIndices = this.visibleIndices.map((i) => {
      if (i === this.sets.length - 1) {
        return 0;
      } else {
        return i + 1;
      }
    });
    this.visibleSets = [...this.visibleSets, this.sets[this.visibleIndices[2]]];
    setTimeout(() => {
      this.visibleSets.shift();
    }, 50);
  }

  prev() {
    this.visibleIndices = this.visibleIndices.map((i) => {
      if (i === 0) {
        return this.sets.length - 1;
      } else {
        return i - 1;
      }
    });
    this.visibleSets = [this.sets[this.visibleIndices[0]], ...this.visibleSets];
    setTimeout(() => {
      this.visibleSets.pop();
    }, 50);
    // this.setVisibleSets();
  }

  setVisibleSets() {
    this.visibleSets = [];
    this.visibleIndices.forEach((i) => this.visibleSets.push(this.sets[i]));
    this.cdkRef.markForCheck();
  }

  onClick(event: Set) {
    this.setClicked.emit(event);
  }
}
