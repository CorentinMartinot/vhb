import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerologicalInterpretationPageRoutingModule } from './serological-interpretation-routing.module';

import { SerologicalInterpretationPage } from './serological-interpretation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerologicalInterpretationPageRoutingModule
  ],
  declarations: [SerologicalInterpretationPage]
})
export class SerologicalInterpretationPageModule {}
