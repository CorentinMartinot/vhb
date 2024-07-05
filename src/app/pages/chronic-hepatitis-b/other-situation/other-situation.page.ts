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
  alatOptions = [{ label: 'normal (N)', value: 'normal'}, { label: 'N < _ ⩽ 2N', value: 'btwn-2n' }, { label: '> 2N', value: 'gt2n' }];
  biopsieOptions = [{ label: '< F2', value: 'ltf2'}, { label: '⩾ F2', value: 'gtf2' }, { label: 'biopsie non realisée', value: 'nobiopsie' }];
  fibroscanOptions = [{ label: '< 6 kPa', value: 'lt6'}, { label: '6 ⩽ _ < 9 kPa', value: 'btw6-9'}, { label: '⩾ 9 kPa', value: 'gt9' }];
  alatMoreSpecificOptions = [{ label: '2N < _ < 5N', value: 'btw2n-5n' }, { label: '⩾ 5N', value: 'gt5n' }];
  ageOptions = [{ label: '16 - 29 ans', value: 'btw16-29' }, { label: '30 - 39 ans', value: 'btw30-39' }, { label: '40 - 49 ans', value: 'btw40-49' }, { label: '50 - 59 ans', value: 'btw50-59' }, { label: '60 - 69 ans', value: 'btw60-69' }, { label: '70 et plus', value: '70more' }];
  sexeOptions = [{ label: 'Homme', value: 'M' }, { label: 'Femme', value: 'F' }];
  plateletsOptions = [{ label: '< 100 g/L', value: 'lt100' }, { label: '100 - 199 g/L', value: 'btw100-200' }, { label: '⩾ 200 g/L', value: 'gt200' }];

  @ViewChild(IonContent) content: IonContent | undefined;
  
  agHbe: string = '';
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
  fibroscanResult = '';
  fibroseCompleted = false;
  pageBCompleted = false;
  displayResult = false;
  treatment = '';
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
    const firstChange = !this.agHbe;
    
    this.adnVhb = $event.detail.value;
    this.computeDisplayResult();
    if (firstChange) this.waitAndScrollToBottom();
  }

  setAlat($event: any) {
    const firstChange = !this.alat;

    this.alat = $event.detail.value;
    this.showAlatMoreSpecific = this.alat === 'gt2n';
    this.alatMoreSpecific = '';
    this.computeDisplayResult()

    if (firstChange) this.waitAndScrollToBottom();
  }

  setBiopsie($event: any) {
    const firstChange = !this.biopsie;

    this.biopsie = $event.detail.value;
    this.noBiopsie = this.biopsie === 'nobiopsie';
    this.fibroscan = '';
    this.computeDisplayResult()

    if (firstChange) this.waitAndScrollToBottom();
  }

  setFibroscan($event: any) {
    const firstChange = !this.fibroscan;

    this.fibroscan = $event.detail.value;
    this.computeDisplayResult();

    if (firstChange) this.waitAndScrollToBottom();
  }

  setAlatMoreSpecific($event: any) {
    const firstChange = !this.alatMoreSpecific;

    this.alatMoreSpecific = $event.detail.value;
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
    this.fibroseCompleted = !!this.agHbe && !!this.adnVhb && !!this.alat && !!this.biopsie &&
    (
      (this.biopsie !== 'nobiopsie') ||
      (!!this.fibroscan && (this.alat !== 'gt2n' || !!this.alatMoreSpecific))
    );
    
    this.pageBCompleted = (!!this.age && !!this.sexe && !!this.platelets) ||
      (this.age === 'btw16-29' && this.sexe === 'F') ||
      (this.age === 'btw40-49' && this.sexe === 'M') ||
      (this.age === 'btw50-59' && this.sexe === 'M') ||
      (this.age === 'btw60-69' && this.sexe === 'M') ||
      this.age === '70more';
    
    this.displayResult = this.fibroseCompleted && this.pageBCompleted;
    
    if (this.displayResult) {
      this.treatment = this.computeTreatment();
      this.resultPageB = this.computePageB();
    }
  }

  computeFibroscan () {
    if (this.fibroscan === 'lt6') return 'no';
    if (this.fibroscan === 'btw6-9') return 'uninterpretable-fibroscan-btw6-9';

    const alatValue = this.alat === 'gt2n' ? this.alatMoreSpecific : this.alat;
    if (alatValue === 'gt5n') return 'uninterpretable-alat-gt5n';
    return 'yes';
  }
  
  computeTreatment () {
    if (this.biopsie === 'nobiopsie') {
      this.fibroscanResult = this.computeFibroscan();

      const isFibroscanUninterpretable = this.fibroscanResult === 'uninterpretable-fibroscan-btw6-9' || this.fibroscanResult === 'uninterpretable-alat-gt5n'

      // On met ici les cas où ; ne pas savoir si il y a fibrose ou non, empeche de conclure sur le traitement
      const isFibroscanNeeded = 
        (this.agHbe === 'neg' && this.adnVhb !== 'lt2000' && this.alat === 'normal') ||
        (
          this.agHbe === 'pos' &&
          (this.adnVhb === 'btw20000-1M' || this.adnVhb === 'gt1M') &&
          (this.alat === 'normal' || this.alat === 'btwn-2n')
        )
      if (isFibroscanUninterpretable && isFibroscanNeeded) return 'not-defined';
    }

    const hasInterpretedFibrose = this.biopsie === 'gtf2' || this.fibroscanResult === 'yes';

    if (
      this.agHbe === 'pos' && 
      this.adnVhb === 'gt1M' 
      && (this.alat === 'normal' || this.alat === 'btwn-2n') 
      && !hasInterpretedFibrose
      && this.age !== 'btw16-29'
    ) return 'optionnal';

    const noTreatment = 
    (this.adnVhb === 'lt2000') ||
    (this.alat === 'normal' && !hasInterpretedFibrose) ||
    (this.agHbe === 'pos' && (this.adnVhb === 'btw2000-20000' || (this.alat === 'btwn-2n' && !hasInterpretedFibrose)))
    
    return noTreatment ? 'no' : 'yes';
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
    this.resultPageB = undefined;
    this.fibroscanResult = '';
  }
}
