import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalManagementDetailPageRoutingModule } from './medical-management-detail-routing.module';

import { MedicalManagementDetailPage } from './medical-management-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalManagementDetailPageRoutingModule
  ],
  declarations: [MedicalManagementDetailPage]
})
export class MedicalManagementDetailPageModule {}
