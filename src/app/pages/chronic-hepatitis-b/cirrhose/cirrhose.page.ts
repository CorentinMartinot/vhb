import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FAMILY_HISTORY_OF_CIRRHOSIS } from 'src/app/helpers/constants';

@Component({
  selector: 'app-cirrhose',
  templateUrl: './cirrhose.page.html',
  styleUrls: ['./cirrhose.page.scss'],
})
export class CirrhosePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToFamilyHistory() {
    this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: FAMILY_HISTORY_OF_CIRRHOSIS } })
  }

}
