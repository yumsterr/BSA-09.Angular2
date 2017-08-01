import { TimerComponent } from './timer.component';
import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TimerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimerRoutingModule { }