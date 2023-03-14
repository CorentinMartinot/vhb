import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medical-management',
  templateUrl: './medical-management.page.html',
  styleUrls: ['./medical-management.page.scss'],
})
export class MedicalManagementPage implements OnInit {

  buttonList = [
    { name: 'Femme enceinte', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Co - Infection VIH', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Co - Infection VHC', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Co - Infection VHD', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Personne soignant', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Antécédent familial de cirrhose au CHC', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Manifestation extra-hépatique du VHB', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Cirrhose', onClick: () => this.navCtrl.navigateForward('/home') },
    { name: 'Aucune des situations ci-dessus', onClick: () => this.navCtrl.navigateForward('/home') },
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goTo () {
    this.navCtrl.navigateForward('/home')
  }

}
