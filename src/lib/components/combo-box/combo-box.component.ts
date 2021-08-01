import { Component, OnInit, Input, Output, EventEmitter, isDevMode } from '@angular/core';


import { IItem } from '@ric-ng/ts-general';

import { IMonoChoiceable } from '../__interfaces/IMonoChoiceable';
import { IMultiChoicesable } from '../__interfaces/IMultiChoicesable';



@Component({
  selector: 'combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit, IMonoChoiceable, IMultiChoicesable {

  @Input('items') aItems: Array<IItem> = [];
  @Input('nbVisibleItems') iNbVisibleItems: number = 1;

  @Input('multiple') bAuthorizeMultipleChoices: boolean = false;

  @Input('initSelectedItemsId') aSelectedItemsId: Array<number> = [];
  @Input('initSelectedItemId') set nSelectedItemId(pnSelectedItemId: number) {
    this.aSelectedItemsId = [pnSelectedItemId];
  }

  @Output('onChange') 
  private readonly oChangeEvent = new EventEmitter<IMonoChoiceable | IMultiChoicesable>();


  // ===================================================================

  constructor() {

  }

  ngOnInit() {
    this._consoleLog();
  }


// ===================================================================

  onChange(paSelectedItemsId: Array<number>) {
    this._consoleLog();
    //
    this.oChangeEvent.emit(this);
  }

  public getSelectedItemId(): number {
    return(this.aSelectedItemsId[0]);
  }
  public getSelectedItemsId(): Array<number> {
    return(this.aSelectedItemsId);
  }

  // ===================================================================

  getOptionTitle(poItem: IItem): string {
    const sTitle: string = (isDevMode())? ('id=' + poItem.getId()) : '';
    return(sTitle);
  }


  // ===================================================================

  private _consoleLog() {
    if (isDevMode()) {
      // console.log('\n\n==============================\n\n', this, '\n\n==============================\n\n');
    }
  }

}
