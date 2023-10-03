import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-modal-treatment',
  templateUrl: './modal-treatment.component.html',
  styleUrls: ['./modal-treatment.component.scss'],
})
export class ModalTreatmentComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  @Input() title: string = 'Traitements';
  @Input() noInterferon: boolean = false;

  constructor() { }

  ngOnInit() {}

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

}
