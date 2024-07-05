import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acute-hepatitis-b',
  templateUrl: './acute-hepatitis-b.page.html',
  styleUrls: ['./acute-hepatitis-b.page.scss'],
})
export class AcuteHepatitisBPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateForward('home?extent-vhb-chronicle=${true}');
  }

}
