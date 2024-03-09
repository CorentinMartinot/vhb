import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-modal-page-b',
  templateUrl: './modal-page-b.component.html',
  styleUrls: ['./modal-page-b.component.scss'],
})
export class ModalPageBComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  @ViewChild(IonContent) content: IonContent | undefined;
  @Input() messageGt10: string = '';
  @Input() messageLt10: string = '';

  age: string = '';
  sexe: string = '';
  platelets: string = '';
  displayResult = false;
  result: boolean | undefined = undefined;

  ageOptions = [{ label: '16 - 29 ans', value: 'btw16-29' }, { label: '30 - 39 ans', value: 'btw30-39' }, { label: '40 - 49 ans', value: 'btw40-49' }, { label: '50 - 59 ans', value: 'btw50-59' }, { label: '60 - 69 ans', value: 'btw60-69' }, { label: '60 et plus', value: '70more' }];
  sexeOptions = [{ label: 'Homme', value: 'M' }, { label: 'Femme', value: 'F' }];
  plateletsOptions = [{ label: '< 100 g/L', value: 'lt100' }, { label: '100 - 199 g/L', value: 'btw100-200' }, { label: '> 200 g/L', value: 'gt200' }];

  constructor() { }

  ngOnInit() {}

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  async waitAndScrollToBottom() {
    await new Promise(resolve => setTimeout(resolve, 100));

    this.content?.scrollToBottom(500);
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
    this.displayResult = (!!this.age && !!this.sexe && !!this.platelets) ||
      (this.age === 'btw16-29' && this.sexe === 'F') ||
      (this.age === 'btw40-49' && this.sexe === 'M') ||
      (this.age === 'btw50-59' && this.sexe === 'M') ||
      (this.age === 'btw60-69' && this.sexe === 'M') ||
      this.age === '70more';
      
      if (this.displayResult) this.result = this.computeScore();
  }

  computeScore () {
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
    this.age = '';
    this.sexe = '';
    this.platelets = '';
    this.displayResult = false;
    this.result = undefined;
  }

}
