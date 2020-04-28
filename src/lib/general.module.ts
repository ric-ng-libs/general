import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComboBoxComponent } from './components/combo-box/combo-box.component';



@NgModule({
  declarations: [ComboBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ComboBoxComponent]
})
export class GeneralModule { }
