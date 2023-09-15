import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HomeSubbuttonComponent } from './home-subbutton/home-subbutton.component';
import { RadioAreaComponent } from './radio-area/radio-area.component';
import { HomeBackgroundSvgComponent } from './home-background-svg/home-background-svg.component';
import { ModalPageBComponent } from './modal-page-b/modal-page-b.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HomeButtonComponent,
        HomeSubbuttonComponent,
        RadioAreaComponent,
        HomeBackgroundSvgComponent,
        ModalPageBComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        HomeButtonComponent,
        HomeSubbuttonComponent,
        RadioAreaComponent,
        HomeBackgroundSvgComponent,
        ModalPageBComponent,
    ],
    entryComponents: [
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentsModule { }
