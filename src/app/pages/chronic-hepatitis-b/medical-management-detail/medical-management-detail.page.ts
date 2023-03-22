import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cipher } from 'crypto';
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
import { MarkdownContent } from 'src/app/helpers/markdown-content';

@Component({
  selector: 'app-medical-management-detail',
  templateUrl: './medical-management-detail.page.html',
  styleUrls: ['./medical-management-detail.page.scss'],
})
export class MedicalManagementDetailPage implements OnInit {

  situation = '';
  markdownContent = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      this.situation = this.router?.getCurrentNavigation()?.extras?.state?.['situation'];

      switch (this.situation) {
        case PREGNANT:
          this.markdownContent = MarkdownContent.pregnant;
          break;
        case CO_VIH:
          this.markdownContent = MarkdownContent.coVIH;
          break;
        case CO_VHC:
          this.markdownContent = MarkdownContent.coVHC;
          break;
        case CO_VHD:
          this.markdownContent = MarkdownContent.coVHD;
          break;
        case CARE_STAFF:
          this.markdownContent = MarkdownContent.careStaff;
          break;
        case FAMILY_HISTORY_OF_CIRRHOSIS:
          this.markdownContent = MarkdownContent.familyHistoryOfCirrhosis;
          break;
        case EXTRAHEPATIC_HBV:
          this.markdownContent = MarkdownContent.extrahepaticHbv;
          break;
        case CIRRHOSE:
          this.markdownContent = MarkdownContent.cirrhose;
          break;
        default:
          this.router.navigate(['/home'])
      }
    });
  }

}
