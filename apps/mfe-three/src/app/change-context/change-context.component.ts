import { Component, ViewEncapsulation } from '@angular/core';
import { ContextService } from '@bbd-mfe-demo/context';

@Component({
  selector: 'bbd-mfe-demo-change-context',
  templateUrl: './change-context.component.html',
  styleUrls: ['./change-context.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeContextComponent {

  constructor(public contextService: ContextService) { }

  saveContext(context: string) {
    this.contextService.myContextWord = context;
  }


}
