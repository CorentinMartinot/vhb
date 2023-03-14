import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcuteHepatitisBPage } from './acute-hepatitis-b.page';

const routes: Routes = [
  {
    path: '',
    component: AcuteHepatitisBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcuteHepatitisBPageRoutingModule {}
