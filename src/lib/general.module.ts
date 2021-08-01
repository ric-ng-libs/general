import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MonoChoiceComboBoxComponent } from './components/combo-boxes/mono-choice/mono-choice-combo-box.component';
import { MultiChoicesComboBoxComponent } from './components/combo-boxes/multi-choices/multi-choices-combo-box.component';



@NgModule({
  declarations: [
    MonoChoiceComboBoxComponent,
    MultiChoicesComboBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MonoChoiceComboBoxComponent,
    MultiChoicesComboBoxComponent
  ]
})
export class GeneralModule { }
