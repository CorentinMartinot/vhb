import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalManagementPageRoutingModule } from './medical-management-routing.module';

import { MedicalManagementPage } from './medical-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalManagementPageRoutingModule
  ],
  declarations: [MedicalManagementPage]
})
export class MedicalManagementPageModule {}
