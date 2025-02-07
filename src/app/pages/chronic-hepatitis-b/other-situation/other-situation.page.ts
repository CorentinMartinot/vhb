import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-other-situation',
  templateUrl: './other-situation.page.html',
  styleUrls: ['./other-situation.page.scss'],
})
export class OtherSituationPage implements OnInit {
  agHbeOptions = [{ label: '-', value: 'neg'}, { label: '+', value: 'pos' }];
  adnVhbOptions = [{ label: '⩽ 2000 UI/mL', value: 'lt2000'}, { label: '2000 < _ ⩽ 20.000 UI/mL', value: 'btw2000-20000' }, { label: '20.000 < _ ⩽ 1.000.000 UI/mL', value: 'btw20000-1M' }, { label: '> 1.000.000 UI/mL', value: 'gt1M' }];
  alatOptions = [{ label: 'normal (N)', value: 'normal'}, { label: 'N < _ ⩽ 2N', value: 'btwn-2n' }, { label: '2N < _ < 5N', value: 'btw2n-5n' }, { label: '⩾ 5N', value: 'gt5n' }];
  fibroscanOptions = [{ label: '< 6 kPa', value: 'lt6'}, { label: '6 ⩽ _ < 9 kPa', value: 'btw6-9'}, { label: '9 ⩽ _ < 12 kPa', value: 'btw9-12'}, { label: '⩾ 12 kPa', value: 'gt12' }];
  ageOptions = [{ label: '16 - 29 ans', value: 'btw16-29' }, { label: '30 - 39 ans', value: 'btw30-39' }, { label: '40 - 49 ans', value: 'btw40-49' }, { label: '50 - 59 ans', value: 'btw50-59' }, { label: '60 - 69 ans', value: 'btw60-69' }, { label: '70 et plus', value: '70more' }];
  sexeOptions = [{ label: 'Homme', value: 'M' }, { label: 'Femme', value: 'F' }];
  plateletsOptions = [{ label: '< 100 g/L', value: 'lt100' }, { label: '100 - 199 g/L', value: 'btw100-200' }, { label: '⩾ 200 g/L', value: 'gt200' }];

  @ViewChild(IonContent) content: IonContent | undefined;
  
  agHbe: string = '';
  adnVhb: string = '';
  alat: string = '';
  fibroscan: string = '';
  age: string = '';
  sexe: string = '';
  platelets: string = '';

  fibroscanResult = '';
  fibroseCompleted = false;
  pageBCompleted = false;
  displayResult = false;
  treatment = '';
  discuseTreatment = '';
  reviewCytolyse = '';
  resultPageB: boolean | undefined = undefined;

  constructor() { }

  ngOnInit() {
  }

  async waitAndScrollToBottom() {
    await new Promise(resolve => setTimeout(resolve, 100));

    this.content?.scrollToBottom(500);
  }

  setAgHbe($event: any) {
    this.agHbe = $event.detail.value;
  }
  
  setAdnVhb($event: any) {
    const firstChange = !this.adnVhb;
    
    this.adnVhb = $event.detail.value;
    this.computeDisplayResult();
    if (firstChange) this.waitAndScrollToBottom();
  }

  setAlat($event: any) {
    const firstChange = !this.alat;

    this.alat = $event.detail.value;
    this.computeDisplayResult()

    if (firstChange) this.waitAndScrollToBottom();
  }


  setFibroscan($event: any) {
    const firstChange = !this.fibroscan;

    this.fibroscan = $event.detail.value;
    this.computeDisplayResult();

    if (firstChange) this.waitAndScrollToBottom();
  }

  setAge($event: any) {
    const firstChange = !this.age;

    this.age = $event.detail.value;
    this.computeDisplayResult();

    if (firstChange) this.waitAndScrollToBottom();
  }

  setSexe($event: any) {
    const firstChange = !this.sexe;

    this.sexe = $event.detail.value;
    this.computeDisplayResult();

    if (firstChange) this.waitAndScrollToBottom();
  }

  setPlatelets($event: any) {
    const firstChange = !this.platelets;

    this.platelets = $event.detail.value;
    this.computeDisplayResult();

    if (firstChange) this.waitAndScrollToBottom();
  }

  computeDisplayResult () {
    this.fibroseCompleted = !!this.agHbe && !!this.adnVhb && !!this.alat && !!this.fibroscan;
    
    this.pageBCompleted = (!!this.age && !!this.sexe && !!this.platelets) ||
      (this.age === 'btw16-29' && this.sexe === 'F') ||
      (this.age === 'btw40-49' && this.sexe === 'M') ||
      (this.age === 'btw50-59' && this.sexe === 'M') ||
      (this.age === 'btw60-69' && this.sexe === 'M') ||
      this.age === '70more';
    
    this.displayResult = this.fibroseCompleted && this.pageBCompleted;
    
    if (this.displayResult) {
      this.fibroscanResult = this.computeFibroscan();
      this.treatment = this.computeTreatment();
      this.discuseTreatment = this.getDiscuseTreatment();
      this.reviewCytolyse = this.getReviewCytolyse();
      this.resultPageB = this.computePageB();
    }
  }

  computeFibroscan () {
    if (this.fibroscan === 'lt6') return 'no';
    if (this.fibroscan === 'btw9-12' && this.alat === 'normal') return 'yes';
    if (this.fibroscan === 'gt12' && this.alat !== 'gt5n') return 'yes';

    return 'uninterpretable-fibroscan';
  }
  
  computeTreatment () {
    if (this.agHbe === 'neg') {
      if (this.fibroscan === 'lt6') {
        if (this.alat === 'normal' || this.adnVhb === 'lt2000') return 'no';
        return 'yes';
      }
      if (this.fibroscan === 'btw6-9') {
        if (this.alat !== 'normal' && this.adnVhb !== 'lt2000') return 'yes';
      }
      if (this.fibroscan === 'btw9-12') {
        if (this.alat === 'normal' || this.adnVhb !== 'lt2000') return 'yes';
      }
      if (this.fibroscan === 'gt12') {
        if (this.alat !== 'gt5n' || this.adnVhb !== 'lt2000') return 'yes';
      } 
    }

    if (this.agHbe === 'pos') {
      if (this.fibroscan === 'lt6') {
        if (this.alat === 'btw2n-5n' || this.alat === 'gt5n') {
          if (this.adnVhb === 'btw20000-1M' || this.adnVhb === 'gt1M') return 'yes'
        }
        return 'no';
      }
      if (this.fibroscan === 'btw6-9') {
        if (this.alat === 'btw2n-5n' || this.alat === 'gt5n') {
          if (this.adnVhb === 'btw20000-1M' || this.adnVhb === 'gt1M') return 'yes'
        }
      }
      if (this.fibroscan === 'btw9-12') {
        if (this.alat === 'normal' || this.adnVhb === 'btw20000-1M' || this.adnVhb === 'gt1M') {
          return 'yes';
        }
      }
      if (this.fibroscan === 'gt12') {
        if (this.alat !== 'gt5n' || this.adnVhb === 'btw20000-1M' || this.adnVhb === 'gt1M') return 'yes';
      } 
    }
    return 'no-conclusion-prescribe-pbh';
  }

  getReviewCytolyse() {
    if (this.alat !== 'normal') {
      if (this.adnVhb === 'lt2000' || this.adnVhb === 'btw2000-20000') return 'should-not';
      return 'maybe';
    }

    return '';
  }

  getDiscuseTreatment() {
    if (this.agHbe === 'neg' && this.fibroscan === 'lt6' && this.alat === 'normal'
      && (this.adnVhb === 'btw20000-1M' || this.adnVhb === 'gt1M')) {
      return "Traitement à discuter, surtout si dépistage du CHC indiqué pour limiter le risque de survenu de CHC";
    }
    if (this.agHbe === 'pos' && (this.fibroscan === 'lt6' || this.fibroscan === 'btw6-9') 
      && (this.alat === 'normal' || this.alat === 'btwn-2n')) {
      if (this.adnVhb === 'btw20000-1M') return "Traitement à discuter, surtout si dépistage du CHC indiqué pour limiter le risque de survenu de CHC";
      if (this.adnVhb === 'gt1M') return "Traitement à proposer si patient > 30ans"
    }

    return '';
  }

  computePageB () {
    return this.age === '70more' ||
      (this.age === 'btw60-69' && !(this.sexe === 'F' && this.platelets === 'gt200')) ||
      (this.age === 'btw50-59' && !(this.sexe === 'F' && this.platelets === 'gt200')) ||
      (this.age === 'btw40-49' && !(this.sexe === 'F' && this.platelets === 'gt200')) ||

      (this.age === 'btw30-39' && this.sexe === 'M' && this.platelets === 'lt100') ||
      (this.age === 'btw30-39' && this.sexe === 'M' && this.platelets === 'btw100-200') ||
      (this.age === 'btw30-39' && this.sexe === 'F' && this.platelets === 'lt100') ||
      
      (this.age === 'btw16-29' && this.sexe === 'M' && this.platelets === 'lt100') ||
      (this.age === 'btw16-29' && this.sexe === 'M' && this.platelets === 'btw100-200');
  }

  reset () {
    this.agHbe = '';
    this.adnVhb = '';
    this.alat = '';
    this.fibroscan = '';
    this.fibroseCompleted = false;
    this.age = '';
    this.sexe = '';
    this.platelets = '';
    this.pageBCompleted = false;
    this.displayResult = false;
    this.treatment = '';
    this.resultPageB = undefined;
    this.fibroscanResult = '';
    this.discuseTreatment = '';
    this.reviewCytolyse = '';
  }
}
