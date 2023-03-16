import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medical-management',
  templateUrl: './medical-management-list.page.html',
  styleUrls: ['./medical-management-list.page.scss'],
})
export class MedicalManagementListPage implements OnInit {

  buttonList = [
    { name: 'Femme enceinte', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Co - Infection VIH', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Co - Infection VHC', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Co - Infection VHD', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Personne soignant', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Antécédent familial de cirrhose au CHC', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Manifestation extra-hépatique du VHB', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Cirrhose', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
    { name: 'Aucune des situations ci-dessus', onClick: () => this.navCtrl.navigateForward('/medical-management-detail') },
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goTo () {
    this.navCtrl.navigateForward('/home')
  }

}
