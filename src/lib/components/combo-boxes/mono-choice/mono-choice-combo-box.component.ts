import { Component, Input, isDevMode } from '@angular/core';


import { AComboBoxComponent } from '../common/_abstracts/combo-box.component';

import { IMonoChoiceable } from './../../__interfaces/IMonoChoiceable';



@Component({
  selector: 'mono-choice-combo-box',
  templateUrl: './../common/combo-box.component.html', //<<<<<<<<<<< Template HTML indépendant
})
export class MonoChoiceComboBoxComponent
  extends AComboBoxComponent<IMonoChoiceable> //<<<<<<< juste une classe Controller indépendante.
  implements IMonoChoiceable {


  bMultiSelectionEnabled: boolean = false;

  selection: Array<number> = []; //Quand même obligé de passer par un Array, 
                                 //car dans le template l'attribut HTML multiple à false ne suffit pas !
                                 //Il empêche juste le user de multi-sélectionner, MAIS
                                 //la présence de l'attribut multiple (quelle que soit sa valeur)
                                 //fait que le ngModel travaillera avec un Array !

  @Input('setSelectedItemId') 
  set _setSelectedItemId(pnSelectedItemId: number) {
    if (isDevMode()) {
      console.log(`_setSelectedItemId: ${pnSelectedItemId}`);
    }
    this.selection = [pnSelectedItemId];
  }
  

  // ===================================================================

  protected setDefaultNbVisibleItems(): void {
    this.iNbVisibleItems = 1;

  }

  protected consoleLogThis(): void {
    if (isDevMode()) {
      console.log(`MonoChoiceComboBoxComponent - selected item id : ${this.selection}`);

    }
  }

  // ===================================================================

  onChange(selection: Array<number>): void {
    console.log(`\nCHANGE MONO CHOICE COMBO :`);
    this.consoleLogThis();
    //
    this.oChangeEvent.emit(this);

  }

  public getSelectedItemId(): number {
    return (this.selection[0]); //Puisqu'on est obligé de travailler avec un Array (comme expliqué plus haut).
  }

}
