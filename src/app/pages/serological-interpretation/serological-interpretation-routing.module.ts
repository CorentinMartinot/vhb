import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerologicalInterpretationPage } from './serological-interpretation.page';

const routes: Routes = [
  {
    path: '',
    component: SerologicalInterpretationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerologicalInterpretationPageRoutingModule {}
