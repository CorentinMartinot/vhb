import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerologicalInterpretationPageRoutingModule } from './serological-interpretation-routing.module';

import { SerologicalInterpretationPage } from './serological-interpretation.page';
import { MarkdownModule } from 'ngx-markdown';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerologicalInterpretationPageRoutingModule,
    MarkdownModule,
    ComponentsModule,
  ],
  declarations: [SerologicalInterpretationPage]
})
export class SerologicalInterpretationPageModule {}
