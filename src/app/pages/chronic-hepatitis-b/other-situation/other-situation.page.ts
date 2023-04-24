import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-situation',
  templateUrl: './other-situation.page.html',
  styleUrls: ['./other-situation.page.scss'],
})
export class OtherSituationPage implements OnInit {

  @Input() adnVhb: string = '1';

  constructor() { }

  ngOnInit() {
  }

  setAdnVhb($event: any) {
    this.adnVhb = $event.detail.value;
  }

}
