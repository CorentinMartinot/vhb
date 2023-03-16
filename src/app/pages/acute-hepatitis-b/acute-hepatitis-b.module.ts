import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcuteHepatitisBPageRoutingModule } from './acute-hepatitis-b-routing.module';

import { AcuteHepatitisBPage } from './acute-hepatitis-b.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcuteHepatitisBPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AcuteHepatitisBPage]
})
export class AcuteHepatitisBPageModule {}
