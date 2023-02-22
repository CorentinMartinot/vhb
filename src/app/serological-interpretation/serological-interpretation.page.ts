import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serological-interpretation',
  templateUrl: './serological-interpretation.page.html',
  styleUrls: ['./serological-interpretation.page.scss'],
})
export class SerologicalInterpretationPage implements OnInit {
  agHbs: boolean = false;
  acAntiHbs: boolean = false;
  acAntiHbc: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resetToggles () {
    this.agHbs = false;
    this.acAntiHbs = false;
    this.acAntiHbc = false;
  }

  markdownContent() {
    return `
      ## Markdown __rulez__!
      ---

      ### Syntax highlight
      \`\`\`typescript
      const language = 'typescript';
      \`\`\`

      ### Lists
      1. Ordered list
      2. Another bullet point
        - Unordered list
        - Another unordered bullet

      ### Blockquote
      > Blockquote to the max
    `;

  }

}
