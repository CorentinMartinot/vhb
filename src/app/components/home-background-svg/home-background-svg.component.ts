import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'home-background-svg',
  templateUrl: './home-background-svg.component.html',
  styleUrls: ['./home-background-svg.component.scss'],
})
export class HomeBackgroundSvgComponent implements OnInit {
  cyanTransform: string = '';
  indigoTransform: string = '';
  violetTransform: string = '';
  nepalTransform: string = '';

  constructor() { }
  
  ngOnInit() {
    this.computeSvg();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.computeSvg();
  }
  
  computeSvg() {
    const SMALL_WIDTH = 400;
    const LARGE_WIDTH = 2000;
  
    const innerWidth = window.innerWidth;
    const widthRatio = (innerWidth-SMALL_WIDTH)/(LARGE_WIDTH-SMALL_WIDTH);
    const innerHeight = window.innerHeight;
  
    this.cyanTransform = `translate(-150, ${-(60+80*widthRatio)}) scale(${widthRatio + 1 })`;

    this.indigoTransform = `translate(${innerWidth-(60+290*widthRatio)}, ${50-400*widthRatio}) scale(${widthRatio + 1 })`;
  
    this.violetTransform = `translate(${innerWidth-(240+350*widthRatio)}, ${innerHeight-(190+150*widthRatio)}) scale(${widthRatio + 1 })`;
  
    this.nepalTransform = `translate(${-200+100*widthRatio}, ${innerHeight-360}) scale(${widthRatio + 1 })`;
  }

}