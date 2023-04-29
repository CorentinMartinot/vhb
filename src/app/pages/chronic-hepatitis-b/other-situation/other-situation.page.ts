import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-situation',
  templateUrl: './other-situation.page.html',
  styleUrls: ['./other-situation.page.scss'],
})
export class OtherSituationPage implements OnInit {
  adnVhbOptions = [{ label: '< 2000', value: 'lt2000'}, { label: '2000 - 20.000', value: 'btw2000-20000' }, { label: '> 20.000', value: 'gt20000' }];
  // < N ou N tout court
  alatOptions = [{ label: 'normal (N)', value: 'normal'}, { label: 'N - 2N', value: 'btwn-2n' }, { label: '> 2N', value: 'gt2n' }];
  biopsieOptions = [{ label: '< F2', value: 'ltf2'}, { label: '> F2', value: 'gtf2' }, { label: 'biopsie non realisée', value: 'nobiopsie' }];
  fibroscanOptions = [{ label: '< 9', value: 'lt9'}, { label: '9 - 12', value: 'btw9-12' }, { label: '> 12', value: 'gt12' }];
  alatMoreSpecificOptions = [{ label: '2N - 5N', value: 'btw2n-5n' }, { label: '> 5N', value: 'gt5n' }];

  adnVhb: string = '';
  alat: string = '';
  biopsie: string = '';
  fibroscan: string = '';
  alatMoreSpecific: string = '';

  showAlatMoreSpecific = false;
  noBiopsie = false;
  showResult = false;
  result = '';

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
    this.computeShowResult()
  }

  setBiopsie($event: any) {
    this.biopsie = $event.detail.value;
    this.noBiopsie = this.biopsie === 'nobiopsie';
    this.fibroscan = '';
    this.computeShowResult()
  }

  setFibroscan($event: any) {
    this.fibroscan = $event.detail.value;
    this.computeShowResult();
  }

  setAlatMoreSpecific($event: any) {
    this.alatMoreSpecific = $event.detail.value;
    this.computeShowResult();
  }

  computeShowResult () {
    this.showResult = !!this.adnVhb && !!this.alat && !!this.biopsie &&
    (
      (this.biopsie !== 'nobiopsie') ||
      (!!this.fibroscan && (this.alat !== 'gt2n' || !!this.alatMoreSpecific))
      );
    
      
      if (this.showResult) this.result = this.computeResult();
  }

  computeResult () {
    const alatValue = this.alat === 'gt2n' ? this.alatMoreSpecific : this.alat;
    if (alatValue === 'gt5n') return 'ininterpretable'; // le fibroscan, mettre un enum plus tard

    const hasFibrose = this.biopsie === 'gtf2' ||
      (this.fibroscan === 'btw9-12' && alatValue === 'normal') ||
      this.fibroscan === 'gt12';

    console.log('adnVhb', this.adnVhb);
    console.log('alatValue', alatValue);
    console.log('hasFibrose', hasFibrose);
    
    const noTreatment = !hasFibrose && 
      (alatValue === 'normal' || (alatValue === 'btwn-2n' && this.adnVhb !== 'btw2000-20000'));
    
    return noTreatment ? 'non' : 'oui';
  }

  reset () {
    this.adnVhb = '';
    this.alat = '';
    this.biopsie = '';
    this.fibroscan = '';
    this.alatMoreSpecific = '';
    this.showAlatMoreSpecific = false;
    this.noBiopsie = false;
    this.showResult = false;
    this.result = '';
  }
}
