import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerRoutingModule } from "./timer-routing.module";
import { CdkTableModule } from '@angular/cdk';

import 'hammerjs';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TimerComponent } from './timer.component';

@NgModule({
    declarations: [
        TimerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        TimerRoutingModule,
        BrowserAnimationsModule,
        CdkTableModule
    ],
})
export class TimerModule { }
