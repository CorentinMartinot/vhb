import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CirrhosePage } from './cirrhose.page';

const routes: Routes = [
  {
    path: '',
    component: CirrhosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirrhosePageRoutingModule {}
