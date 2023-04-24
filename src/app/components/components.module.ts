import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HomeSubbuttonComponent } from './home-subbutton/home-subbutton.component';
import { RadioAreaComponent } from './radio-area/radio-area.component';


@NgModule({
    declarations: [
        HeaderComponent,
        HomeButtonComponent,
        HomeSubbuttonComponent,
        RadioAreaComponent,
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
    ],
    entryComponents: [
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentsModule { }
