import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() darkTitle: string = '';
  @Input() coloredTitle: string = '';
  @Input() color: string = '';
  @Input() defaultBackRoute: string = '/home';
  
  

  constructor() { }

  ngOnInit() {}

}
