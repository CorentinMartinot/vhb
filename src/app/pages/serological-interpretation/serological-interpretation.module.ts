import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerologicalInterpretationPageRoutingModule } from './serological-interpretation-routing.module';

import { SerologicalInterpretationPage } from './serological-interpretation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerologicalInterpretationPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SerologicalInterpretationPage]
})
export class SerologicalInterpretationPageModule {}
