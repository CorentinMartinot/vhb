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
      name: PREGNANT,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: PREGNANT } }),
    },
    { 
      name: CO_VIH,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CO_VIH } }),
    },
    { 
      name: CO_VHC,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CO_VHC } }),
    },
    { 
      name: CO_VHD,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CO_VHD } }),
    },
    { 
      name: CARE_STAFF,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: CARE_STAFF } }),
    },
    { 
      name: FAMILY_HISTORY_OF_CIRRHOSIS,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: FAMILY_HISTORY_OF_CIRRHOSIS } }),
    },
    { 
      name: EXTRAHEPATIC_HBV,
      onClick: () => this.navCtrl.navigateForward('/medical-management-detail', { state: { situation: EXTRAHEPATIC_HBV } }),
    },
    { 
      name: CIRRHOSE,
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
