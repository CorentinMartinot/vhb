import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        HeaderComponent,
    ],
    entryComponents: [
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentsModule { }
