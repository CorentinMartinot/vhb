import { Component, OnInit } from '@angular/core';
import { MarkdownContent } from 'src/app/helpers/markdown-content';

@Component({
  selector: 'app-intention-review',
  templateUrl: './intention-review.page.html',
  styleUrls: ['./intention-review.page.scss'],
})
export class IntentionReviewPage implements OnInit {

  intentionReviewQuestionning = '';
  biology = '';
  paraclinicalExamination = '';

  constructor() { }

  ngOnInit() {
    this.intentionReviewQuestionning = MarkdownContent.intentionReviewQuestionning;
    this.biology = MarkdownContent.biology;
    this.paraclinicalExamination = MarkdownContent.paraclinicalExamination;
  }

}
