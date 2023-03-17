import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-subbutton',
  templateUrl: './home-subbutton.component.html',
  styleUrls: ['./home-subbutton.component.scss'],
})
export class HomeSubbuttonComponent implements OnInit {

  @Input() label = '';

  constructor() { }

  ngOnInit() {}

}
