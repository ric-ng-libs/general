import { Component, Input, isDevMode } from '@angular/core';


import { AComboBoxComponent } from './../_abstracts/combo-box.component';

import { IMultiChoicesable } from './../../__interfaces/IMultiChoicesable';


@Component({
  selector: 'multi-choices-combo-box',
  templateUrl: './multi-choices-combo-box.component.html',
  styleUrls: ['./multi-choices-combo-box.component.scss']
})
export class MultiChoicesComboBoxComponent
  extends AComboBoxComponent<IMultiChoicesable>
  implements IMultiChoicesable {

  @Input('initSelectedItemsId')
  aSelectedItemsId: Array<number> = [];


  // ===================================================================

  protected setDefaultNbVisibleItems(): void {
    if (this.iNbVisibleItems === 0) {
      this.iNbVisibleItems = this.aItems.length;
    }

  }

  protected consoleLogThis() {
    if (isDevMode()) {
      console.log(`MultiChoicesComboBoxComponent - selected items id : [ ${this.aSelectedItemsId.join(", ")} ]`);

    }
  }



  // ===================================================================

  onChange(_paSelectedItemsId: Array<number>) {
    console.log(`\nCHANGE. MULTI CHOICES COMBO :.`);
    this.consoleLogThis();
    //
    this.oChangeEvent.emit(this);
  }

  public getSelectedItemsId(): Array<number> {
    return (this.aSelectedItemsId);
  }

}