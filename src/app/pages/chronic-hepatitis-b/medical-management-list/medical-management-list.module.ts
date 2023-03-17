import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalManagementListPageRoutingModule } from './medical-management-list-routing.module';

import { MedicalManagementListPage } from './medical-management-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalManagementListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicalManagementListPage]
})
export class MedicalManagementListPageModule {}
