import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  extentVHBChronicle = false;

  constructor() {}

  switchExtentVHBChronicle () {
    this.extentVHBChronicle = !this.extentVHBChronicle;
  }

}
