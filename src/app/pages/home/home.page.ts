import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonPopover, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('infopopover') infoPopover: IonPopover | undefined;

  extentVHBChronicle = false;

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) {}

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

  goToPrivacyPolicy() {
    this.navCtrl.navigateForward('privacy-policy');
    this.infoPopover?.dismiss();
  }

}
