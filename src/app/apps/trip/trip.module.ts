import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripDetailComponent} from './trip-detail/trip-detail.component';
import {TripRoutingModule} from "./trip-routing.module";


@NgModule({
    declarations: [

        TripDetailComponent
    ],
    imports: [
        CommonModule,
        TripRoutingModule
    ]
})
export class TripModule {
}
