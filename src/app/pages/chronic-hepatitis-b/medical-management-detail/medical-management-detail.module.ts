import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalManagementDetailPageRoutingModule } from './medical-management-detail-routing.module';

import { MedicalManagementDetailPage } from './medical-management-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalManagementDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicalManagementDetailPage]
})
export class MedicalManagementDetailPageModule {}
