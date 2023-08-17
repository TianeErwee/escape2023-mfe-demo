import { Component } from '@angular/core';
import { Set } from '@bbd-mfe-new/models';
import { LegoFacadeService } from '@bbd-mfe-new/store';

@Component({
  selector: 'bbd-mfe-new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  inventory$ = this.legoFacadeService.inventory$;
  
  constructor(private legoFacadeService: LegoFacadeService) {}

  async addSetToInventory(set: Set): Promise<void> {
    this.legoFacadeService.addSetToInventory(set);
  }
}
