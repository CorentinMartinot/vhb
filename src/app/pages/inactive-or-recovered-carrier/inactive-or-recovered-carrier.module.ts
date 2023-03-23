import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactiveOrRecoveredCarrierPageRoutingModule } from './inactive-or-recovered-carrier-routing.module';

import { InactiveOrRecoveredCarrierPage } from './inactive-or-recovered-carrier.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactiveOrRecoveredCarrierPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InactiveOrRecoveredCarrierPage]
})
export class InactiveOrRecoveredCarrierPageModule {}
