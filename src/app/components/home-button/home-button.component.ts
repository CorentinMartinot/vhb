import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CHEVRON_DOWN, CHEVRON_FORWARD, CHEVRON_UP } from 'src/app/helpers/constants';

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
  @Output() switch = new EventEmitter();

  chevronDirection = CHEVRON_FORWARD;

  constructor() { }

  ngOnInit() {
    this.chevronDirection = !!this.navigationRoute ? CHEVRON_FORWARD : CHEVRON_DOWN;
  }

  onClick() {
    if (!this.navigationRoute){
      this.chevronDirection = this.chevronDirection === CHEVRON_DOWN ? CHEVRON_UP : CHEVRON_DOWN;
      this.switch.emit();
    }
  }

}
