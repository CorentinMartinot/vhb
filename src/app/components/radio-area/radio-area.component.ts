import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { option } from 'src/app/models/model';

@Component({
  selector: 'radio-area',
  templateUrl: './radio-area.component.html',
  styleUrls: ['./radio-area.component.scss'],
})
export class RadioAreaComponent implements OnInit {

  @Input() title: string = '';
  @Input() options: option[] = [];
  @Input() selectedValue: string = '';
  @Output() change = new EventEmitter();

  extendedOptions: any = [];

  constructor() { }

  ngOnInit() {
    this.extendedOptions = this.options.map((option, i) => i === this.options.length - 1 ? { ...option, lines: 'none' } : { ...option, lines: 'full' })
  }

  onChange($event: any) {
    this.change.emit($event);
  }

}
