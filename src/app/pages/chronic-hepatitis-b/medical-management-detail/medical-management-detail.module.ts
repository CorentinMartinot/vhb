import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalManagementDetailPageRoutingModule } from './medical-management-detail-routing.module';

import { MedicalManagementDetailPage } from './medical-management-detail.page';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule,
    MedicalManagementDetailPageRoutingModule
  ],
  declarations: [MedicalManagementDetailPage]
})
export class MedicalManagementDetailPageModule {}
