import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-situation',
  templateUrl: './other-situation.page.html',
  styleUrls: ['./other-situation.page.scss'],
})
export class OtherSituationPage implements OnInit {
  adnVhbOptions = [{ label: '< 2000', value: 'lt2000'}, { label: '2000 - 20.000', value: 'btw2000-20000' }, { label: '> 20.000', value: 'gt20000' }];
  // < N ou N tout court ??
  alatOptions = [{ label: 'normal (N)', value: 'normal'}, { label: 'N - 2N', value: 'btwn-2n' }, { label: '> 2N', value: 'gt2n' }];
  biopsieOptions = [{ label: '< F2', value: 'ltf2'}, { label: '> F2', value: 'gtf2' }, { label: 'biopsie non realisée', value: 'nobiopsie' }];
  fibroscanOptions = [{ label: '< 9', value: 'lt9'}, { label: '9 - 12', value: 'btw9-12' }, { label: '> 12', value: 'gt12' }];
  alatMoreSpecificOptions = [{ label: '2N - 5N', value: 'btw2n-5n' }, { label: '> 5N', value: 'gt5n' }];
  ageOptions = [{ label: '16 - 29 ans', value: 'btw16-29' }, { label: '30 - 39 ans', value: 'btw30-39' }, { label: '40 - 49 ans', value: 'btw40-49' }, { label: '50 - 59 ans', value: 'btw50-59' }, { label: '60 - 69 ans', value: 'btw60-69' }, { label: '60 et plus', value: '70more' }];
  sexeOptions = [{ label: 'Homme', value: 'M' }, { label: 'Femme', value: 'F' }];
  plateletsOptions = [{ label: '< 100 g/L', value: 'lt100' }, { label: '100 - 199 g/L', value: 'btw100-200' }, { label: '> 200 g/L', value: 'gt200' }];

  adnVhb: string = '';
  alat: string = '';
  biopsie: string = '';
  fibroscan: string = '';
  alatMoreSpecific: string = '';
  age: string = '';
  sexe: string = '';
  platelets: string = '';

  showAlatMoreSpecific = false;
  noBiopsie = false;
  fibroseCompleted = false;
  pageBCompleted = false;
  displayResult = false;
  treatment = '';
  surveyance: boolean | undefined = undefined;

  constructor() { }

  ngOnInit() {
  }

  setAdnVhb($event: any) {
    this.adnVhb = $event.detail.value;
  }

  setAlat($event: any) {
    this.alat = $event.detail.value;
    this.showAlatMoreSpecific = this.alat === 'gt2n';
    this.alatMoreSpecific = '';
    this.computeDisplayResult()
  }

  setBiopsie($event: any) {
    this.biopsie = $event.detail.value;
    this.noBiopsie = this.biopsie === 'nobiopsie';
    this.fibroscan = '';
    this.computeDisplayResult()
  }

  setFibroscan($event: any) {
    this.fibroscan = $event.detail.value;
    this.computeDisplayResult();
  }

  setAlatMoreSpecific($event: any) {
    this.alatMoreSpecific = $event.detail.value;
    this.computeDisplayResult();
  }

  setAge($event: any) {
    this.age = $event.detail.value;
    this.computeDisplayResult();
  }

  setSexe($event: any) {
    this.sexe = $event.detail.value;
    this.computeDisplayResult();
  }

  setPlatelets($event: any) {
    this.platelets = $event.detail.value;
    this.computeDisplayResult();
  }

  computeDisplayResult () {
    this.fibroseCompleted = !!this.adnVhb && !!this.alat && !!this.biopsie &&
    (
      (this.biopsie !== 'nobiopsie') ||
      (!!this.fibroscan && (this.alat !== 'gt2n' || !!this.alatMoreSpecific))
      );
    
    this.pageBCompleted = (!!this.age && !!this.sexe && !!this.platelets) ||
      this.age === 'btw16-29' ||
      (this.age === 'btw30-39' && this.sexe === 'F') ||
      (this.age === 'btw40-49' && !!this.sexe) ||
      (this.age === 'btw50-59' && !!this.sexe) ||
      (this.age === 'btw60-69' && this.sexe === 'M') ||
      this.age === '70more';

      this.displayResult = this.fibroseCompleted && this.pageBCompleted
      
      if (this.displayResult) {
        this.treatment = this.computeTreatment();
        this.surveyance = this.computeSurveyance();
      }
  }

  computeTreatment () {
    const alatValue = this.alat === 'gt2n' ? this.alatMoreSpecific : this.alat;
    if (alatValue === 'gt5n') return 'ininterpretable'; // le fibroscan, mettre un enum plus tard

    const hasFibrose = this.biopsie === 'gtf2' ||
      (this.fibroscan === 'btw9-12' && alatValue === 'normal') ||
      this.fibroscan === 'gt12';

    const noTreatment = !hasFibrose && 
      (alatValue === 'normal' || (alatValue === 'btwn-2n' && this.adnVhb !== 'btw2000-20000'));
    
    return noTreatment ? 'non' : 'oui';
  }

  computeSurveyance () {
    return this.age === '70more' ||
      (this.age === 'btw60-69' && this.sexe === 'M') ||
      (this.age === 'btw60-69' && this.sexe === 'F' && this.platelets === 'lt100') ||
      (this.age === 'btw50-59' && this.sexe === 'M') ||
      (this.age === 'btw40-49' && this.sexe === 'M') ||
      (this.age === 'btw30-39' && this.sexe === 'M' && this.platelets === 'lt100');
  }

  reset () {
    this.adnVhb = '';
    this.alat = '';
    this.biopsie = '';
    this.fibroscan = '';
    this.alatMoreSpecific = '';
    this.showAlatMoreSpecific = false;
    this.noBiopsie = false;
    this.fibroseCompleted = false;
    this.age = '';
    this.sexe = '';
    this.platelets = '';
    this.pageBCompleted = false;
    this.displayResult = false;
    this.treatment = '';
    this.surveyance = undefined;
  }
}
