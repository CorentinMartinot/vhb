import { Component, OnInit } from '@angular/core';
import { MarkdownContent } from 'src/app/helpers/markdown-content';

@Component({
  selector: 'app-acute-hepatitis-b',
  templateUrl: './acute-hepatitis-b.page.html',
  styleUrls: ['./acute-hepatitis-b.page.scss'],
})
export class AcuteHepatitisBPage implements OnInit {
  markdownContent = '';

  constructor() { }

  ngOnInit() {
    this.markdownContent = MarkdownContent.acuteHepatitisB;
  }



}
