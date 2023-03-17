import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent implements OnInit {

  @Input() darkTitle: string = '';
  @Input() coloredTitle: string = '';
  @Input() color: string = '';
  @Input() navigationRoute: string = '';

  displayChevron = false;

  constructor() { }

  ngOnInit() {
    this.displayChevron = !!this.navigationRoute;
  }
}
