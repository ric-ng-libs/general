import { Input, Output, EventEmitter, isDevMode, Component, OnInit } from '@angular/core';


import { IItem } from '@ric-ng/ts-general';


@Component({ //<< Obligatoire du fait des Output et Input.
             //Mais en réalité, il s'agit bien d'une classe toute bête, destinée à être parente.
  template: '' 
})
export abstract class AComboBoxComponent<TypeChoiceable> implements OnInit {

  @Input('items') aItems: Array<IItem> = [];
  @Input('nbVisibleItems') iNbVisibleItems: number = 0;

  @Output('onChange') 
  protected readonly oChangeEvent = new EventEmitter<TypeChoiceable>();


  // ===================================================================

  constructor() {

  }


  ngOnInit(): void {
    console.log(`\nINIT. ${this.constructor.name} :.`);
    this.setDefaultNbVisibleItems();
    this.consoleLogThis();

  }

  protected abstract setDefaultNbVisibleItems(): void;
  protected abstract consoleLogThis(): void;


  // ===================================================================

  getOptionTitle(poItem: IItem): string {
    const sTitle: string = (isDevMode())? `id=${poItem.getId()}` : '';
    return(sTitle);
  }

}
