import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerologicalInterpretationPageRoutingModule } from './serological-interpretation-routing.module';

import { SerologicalInterpretationPage } from './serological-interpretation.page';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerologicalInterpretationPageRoutingModule,
    MarkdownModule,
  ],
  declarations: [SerologicalInterpretationPage]
})
export class SerologicalInterpretationPageModule {}
