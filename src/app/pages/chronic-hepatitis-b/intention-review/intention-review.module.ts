import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntentionReviewPageRoutingModule } from './intention-review-routing.module';

import { IntentionReviewPage } from './intention-review.page';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule,
    IntentionReviewPageRoutingModule
  ],
  declarations: [IntentionReviewPage]
})
export class IntentionReviewPageModule {}
