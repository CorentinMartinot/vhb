import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherSituationPage } from './other-situation.page';

const routes: Routes = [
  {
    path: '',
    component: OtherSituationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherSituationPageRoutingModule {}
