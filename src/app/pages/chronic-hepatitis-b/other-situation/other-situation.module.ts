import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherSituationPageRoutingModule } from './other-situation-routing.module';

import { OtherSituationPage } from './other-situation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherSituationPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [OtherSituationPage]
})
export class OtherSituationPageModule { }
