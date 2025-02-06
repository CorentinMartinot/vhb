import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-medical-management-detail',
  templateUrl: './medical-management-detail.page.html',
  styleUrls: ['./medical-management-detail.page.scss'],
})
export class MedicalManagementDetailPage implements OnInit {
  PREGNANT = PREGNANT;
  CO_VIH = CO_VIH;
  CO_VHC = CO_VHC;
  CO_VHD = CO_VHD;
  CARE_STAFF = CARE_STAFF;
  FAMILY_HISTORY_OF_CIRRHOSIS = FAMILY_HISTORY_OF_CIRRHOSIS;
  EXTRAHEPATIC_HBV = EXTRAHEPATIC_HBV;
  CIRRHOSE = CIRRHOSE;

  situation = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      this.situation = this.router?.getCurrentNavigation()?.extras?.state?.['situation'];

      if (!this.situation) this.router.navigate(['/home'])
    });
  }

  clickLink(file: string) {
    window.open(`https://raw.githubusercontent.com/CorentinMartinot/vhb/main/src/assets/docs/${file}`, '_blank');
  }

}
