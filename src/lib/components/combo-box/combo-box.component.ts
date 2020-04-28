import { Component, OnInit, Input, Output, EventEmitter, isDevMode } from '@angular/core';


import { IItem } from '@ric-ng/ts-general';

import { IMonoChoiceable } from '../_interfaces/IMonoChoiceable';
import { IMultiChoicesable } from '../_interfaces/IMultiChoicesable';



@Component({
  selector: 'combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit, IMonoChoiceable, IMultiChoicesable {

  @Input('items') _aItems: Array<IItem> = [];
  @Input('nbVisibleItems') iNbVisibleItems: number = 1;

  @Input('multiple') bAuthorizeMultipleChoices: boolean = false;

  @Input('initSelectedItemsId') aSelectedItemsId: Array<string> = [];
  @Input('initSelectedItemId') set sSelectedItemId(psSelectedItemId: string) {
    this.aSelectedItemsId = [`${psSelectedItemId}`]; // Le forçage en string est NECESSAIRE, mais je ne sais pas pourquoi !!
  }

  @Output('onChange') _oChangeEvent = new EventEmitter<IMonoChoiceable | IMultiChoicesable>();


  // ===================================================================

  constructor() {

  }

  ngOnInit() {
    this._consoleLog();
  }


// ===================================================================

  onChange(paSelectedItemsId: Array<string>) {
    this._consoleLog();
    //
    this._oChangeEvent.emit(this);
  }

  public getSelectedItemId(): string {
    return(this.aSelectedItemsId[0]);
  }
  public getSelectedItemsId(): Array<string> {
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
