import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalManagementListPage } from './medical-management-list.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalManagementListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalManagementListPageRoutingModule {}
