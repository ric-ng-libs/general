import { Component, Input, isDevMode } from '@angular/core';


import { AComboBoxComponent } from '../combo-box/_abstracts/combo-box.component';

import { IMultiChoicesable } from './../../__interfaces/IMultiChoicesable';


@Component({
  selector: 'multi-choices-combo-box',
  templateUrl: './../combo-box/combo-box.component.html', //<<<<<<<<<<< Template HTML indépendant
})
export class MultiChoicesComboBoxComponent
extends AComboBoxComponent<IMultiChoicesable> //<<<<<<< juste une classe Controller indépendante.
implements IMultiChoicesable {

  bMultiSelectionEnabled: boolean = true;

  @Input('initSelectedItemsId')
  selection: Array<number> = [];


  // ===================================================================

  protected setDefaultNbVisibleItems(): void {
    if (this.iNbVisibleItems === 0) {
      this.iNbVisibleItems = this.aItems.length;
    }

  }

  protected consoleLogThis() {
    if (isDevMode()) {
      console.log(`MultiChoicesComboBoxComponent - selected items id : [ ${this.selection.join(", ")} ]`);

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
    return (this.selection);
  }

}