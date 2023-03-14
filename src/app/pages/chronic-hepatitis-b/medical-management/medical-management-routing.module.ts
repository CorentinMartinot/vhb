import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalManagementPage } from './medical-management.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalManagementPageRoutingModule {}
