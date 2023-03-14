import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentionReviewPage } from './intention-review.page';

const routes: Routes = [
  {
    path: '',
    component: IntentionReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentionReviewPageRoutingModule {}
