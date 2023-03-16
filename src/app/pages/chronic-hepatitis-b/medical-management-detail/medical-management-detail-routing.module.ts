import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalManagementDetailPage } from './medical-management-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalManagementDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalManagementDetailPageRoutingModule {}
