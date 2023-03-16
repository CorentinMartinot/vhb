import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalManagementListPageRoutingModule } from './medical-management-list-routing.module';

import { MedicalManagementListPage } from './medical-management-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalManagementListPageRoutingModule
  ],
  declarations: [MedicalManagementListPage]
})
export class MedicalManagementListPageModule {}
