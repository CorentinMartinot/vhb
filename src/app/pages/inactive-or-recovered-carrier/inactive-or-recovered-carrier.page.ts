import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inactive-or-recovered-carrier',
  templateUrl: './inactive-or-recovered-carrier.page.html',
  styleUrls: ['./inactive-or-recovered-carrier.page.scss'],
})
export class InactiveOrRecoveredCarrierPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToNaiveSerology() {
    this.navCtrl.navigateForward('serological-interpretation?display-result=${true}');
  }
}
