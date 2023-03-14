import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcuteHepatitisBPageRoutingModule } from './acute-hepatitis-b-routing.module';

import { AcuteHepatitisBPage } from './acute-hepatitis-b.page';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule,
    AcuteHepatitisBPageRoutingModule
  ],
  declarations: [AcuteHepatitisBPage]
})
export class AcuteHepatitisBPageModule {}
