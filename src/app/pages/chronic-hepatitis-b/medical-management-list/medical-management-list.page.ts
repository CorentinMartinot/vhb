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
  RISK_BEHAVIOR,
} from 'src/app/helpers/constants';

@Component({
  selector: 'app-medical-management',
  templateUrl: './medical-management-list.page.html',
  styleUrls: ['./medical-management-list.page.scss'],
})
export class MedicalManagementListPage implements OnInit {
  CIRRHOSE = CIRRHOSE;

  onClick(situation: string) {
    this.navCtrl.navigateForward(situation);
  }

  situationList = [
    // Special case for CIRROSE : own specific page
    { 
      name: 'Antécédent familial de cirrhose ou de CHC',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: FAMILY_HISTORY_OF_CIRRHOSIS } }),
    },
    { 
      name: 'Manifestation extra-hépatique du VHB',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: EXTRAHEPATIC_HBV } }),
    },
    { 
      name: 'Femme enceinte',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: PREGNANT } }),
    },
    { 
      name: 'Professionnel de santé',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CARE_STAFF } }),
    },
    { 
      name: 'UDIV et comportement sexuel à risque',
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: RISK_BEHAVIOR } }),
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
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
}
