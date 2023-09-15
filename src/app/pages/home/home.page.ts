import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  extentVHBChronicle = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params['extent-vhb-chronicle']) {
        this.extentVHBChronicle = params['extent-vhb-chronicle'];
      }
    });
  }

  switchExtentVHBChronicle () {
    this.extentVHBChronicle = !this.extentVHBChronicle;
  }

}
