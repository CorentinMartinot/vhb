import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonPopover, NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('infopopover') infoPopover: IonPopover | undefined;

  extentVHBChronicle = false;
  isDisclaimerOpen: boolean = false;
  private readonly DISCLAIMER_KEY = 'vhb_disclaimer_approved';

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params['extent-vhb-chronicle']) {
        this.extentVHBChronicle = params['extent-vhb-chronicle'];
      }
    });

    this.checkLocalMemoryForDisclamerApproval();
  }

  async onDisclaimerApproval() {
    await Preferences.set({
      key: this.DISCLAIMER_KEY,
      value: JSON.stringify({
        approved: true,
      })
    });

    this.isDisclaimerOpen = false;
  }

  async checkLocalMemoryForDisclamerApproval() {
    const ret = await Preferences.get({ key: this.DISCLAIMER_KEY });
    
    if (!ret.value || !JSON.parse(ret.value).approved) {
      this.isDisclaimerOpen = true;
    }
  }

  switchExtentVHBChronicle () {
    this.extentVHBChronicle = !this.extentVHBChronicle;
  }

  goToAbout() {
    this.navCtrl.navigateForward('about');
    this.infoPopover?.dismiss();
  }
}
