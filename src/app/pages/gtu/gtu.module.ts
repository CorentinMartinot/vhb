import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GtuPageRoutingModule } from './gtu-routing.module';

import { GtuPage } from './gtu.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GtuPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [GtuPage]
})
export class GtuPageModule {}
