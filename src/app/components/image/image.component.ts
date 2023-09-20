import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @ViewChild('imgpopover') imgPopover: IonPopover | undefined;
  @Input() src = '';

  constructor() { }

  ngOnInit() {}

  viewImg() {
    window.open(`https://vhb.netlify.app${this.src}`, '_blank');
    this.imgPopover?.dismiss();
  }
}
