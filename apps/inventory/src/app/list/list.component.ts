import { Component } from '@angular/core';
import { Set } from '@bbd-mfe-new/models';
import { LegoFacadeService } from '@bbd-mfe-new/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  inventory$: Observable<any>;
  
  constructor(private legoFacadeService: LegoFacadeService) {
    this.inventory$ = this.legoFacadeService.inventory$;
    this.legoFacadeService.getInventory('12345');
  }

  async addSetToInventory(set: Set): Promise<void> {
    this.legoFacadeService.addSetToInventory(set);
  }
}
