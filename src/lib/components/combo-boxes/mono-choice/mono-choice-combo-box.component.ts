import { Component, Input, isDevMode } from '@angular/core';


import { AComboBoxComponent } from './../_abstracts/combo-box.component';

import { IMonoChoiceable } from './../../__interfaces/IMonoChoiceable';



@Component({
  selector: 'mono-choice-combo-box',
  templateUrl: './mono-choice-combo-box.component.html',
  styleUrls: ['./mono-choice-combo-box.component.scss']
})
export class MonoChoiceComboBoxComponent
  extends AComboBoxComponent<IMonoChoiceable>
  implements IMonoChoiceable {

  @Input('initSelectedItemId')
  selectedItemId: number = -1;


  // ===================================================================

  protected setDefaultNbVisibleItems(): void {
    this.iNbVisibleItems = 1;

  }

  protected consoleLogThis(): void {
    if (isDevMode()) {
      console.log(`MonoChoiceComboBoxComponent - selected item id : ${this.selectedItemId}`);

    }
  }

  // ===================================================================

  onChange(_pnSelectedItemId: number): void {
    console.log(`\nCHANGE MONO CHOICE COMBO :`);
    this.consoleLogThis();
    //
    this.oChangeEvent.emit(this);
  }

  public getSelectedItemId(): number {
    return (this.selectedItemId);
  }

}
