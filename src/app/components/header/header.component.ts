import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() darkTitle: string = '';
  @Input() coloredTitle: string = '';
  @Input() subTitle: string = '';
  @Input() color: string = '';
  @Input() icon: string = 'arrow-back-outline';
  @Input() defaultBackRoute: string = '/home';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goHome() {
    this.navCtrl.navigateForward('home');
  }

}
