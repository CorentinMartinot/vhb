import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-serological-interpretation',
  templateUrl: './serological-interpretation.page.html',
  styleUrls: ['./serological-interpretation.page.scss'],
})
export class SerologicalInterpretationPage implements OnInit {
  agHbs: boolean = false;
  acAntiHbs: boolean = false;
  acAntiHbc: boolean = false;
  displayResult: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params['display-result']) {
        this.displayResult = params['display-result'];
      }
    });
  }

  resetToggles() {
    this.agHbs = false;
    this.acAntiHbs = false;
    this.acAntiHbc = false;
    this.displayResult = false;
  }

  goToAcuteHepatitisB() {
    this.navCtrl.navigateForward('acute-hepatitis-b');
  }

  goToVhbResolved() {
    this.navCtrl.navigateForward('inactive-or-recovered-carrier');
  }

  goToHome() {
    this.navCtrl.navigateForward('home?extent-vhb-chronicle=${true}');
  }
}
