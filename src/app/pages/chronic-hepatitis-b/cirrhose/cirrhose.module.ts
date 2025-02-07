import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirrhosePageRoutingModule } from './cirrhose-routing.module';

import { CirrhosePage } from './cirrhose.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirrhosePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CirrhosePage]
})
export class CirrhosePageModule {}
