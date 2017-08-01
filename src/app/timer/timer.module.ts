import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerRoutingModule } from "./timer-routing.module";
import { MdSliderModule } from '@angular/material';

import { MaterialModule } from '@angular/material';

import { TimerComponent } from './timer.component';

@NgModule({
    declarations: [
        TimerComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TimerRoutingModule,
        MdSliderModule,
        MaterialModule,
        
    ],
})

export class TimerModule { }
