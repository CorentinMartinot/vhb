import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  PREGNANT,
  CO_VIH,
  CO_VHC,
  CO_VHD,
  CARE_STAFF,
  FAMILY_HISTORY_OF_CIRRHOSIS,
  EXTRAHEPATIC_HBV,
  CIRRHOSE,
} from 'src/app/helpers/constants';

@Component({
  selector: 'app-medical-management',
  templateUrl: './medical-management-list.page.html',
  styleUrls: ['./medical-management-list.page.scss'],
})
export class MedicalManagementListPage implements OnInit {

  situationList = [
    { 
      name: 'Femme enceinte',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: PREGNANT } }),
    },
    { 
      name: 'Co - Infection VIH',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CO_VIH } }),
    },
    { 
      name: 'Co - Infection VHC',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CO_VHC } }),
    },
    { 
      name: 'Co - Infection VHD',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CO_VHD } }),
    },
    { 
      name: 'Personnel soignant',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CARE_STAFF } }),
    },
    { 
      name: 'Antécédent familial de cirrhose au CHC',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: FAMILY_HISTORY_OF_CIRRHOSIS } }),
    },
    { 
      name: 'Manifestation extra-hépatique du VHB',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: EXTRAHEPATIC_HBV } }),
    },
    { 
      name: 'Cirrhose',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CIRRHOSE } }),
    },
    {
      name: 'Aucune des situations ci-dessus',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail'),
    },
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
}
