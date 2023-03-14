import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InactiveOrRecoveredCarrierPage } from './inactive-or-recovered-carrier.page';

const routes: Routes = [
  {
    path: '',
    component: InactiveOrRecoveredCarrierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactiveOrRecoveredCarrierPageRoutingModule {}
