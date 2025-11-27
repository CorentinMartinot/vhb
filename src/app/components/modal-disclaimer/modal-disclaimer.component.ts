import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-disclaimer',
  templateUrl: './modal-disclaimer.component.html',
  styleUrls: ['./modal-disclaimer.component.scss'],
})
export class ModalDisclaimerComponent {
    @Input() isOpen: boolean = false;
    @Output() approved = new EventEmitter<void>();

  constructor(private modalController: ModalController) {}

  approve() {
    this.approved.emit();
    this.modalController.dismiss();
  }
}
