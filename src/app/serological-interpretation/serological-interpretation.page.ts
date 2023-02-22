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

}
