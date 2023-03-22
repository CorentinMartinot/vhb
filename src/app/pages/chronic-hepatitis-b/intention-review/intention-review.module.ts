import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntentionReviewPageRoutingModule } from './intention-review-routing.module';

import { IntentionReviewPage } from './intention-review.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntentionReviewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IntentionReviewPage]
})
export class IntentionReviewPageModule {}
