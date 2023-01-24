import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppsRoutingModule} from './apps-routing.module';
import {CompanyComponent} from './company/company.component';
import {TripComponent} from './trip/trip.component';
import {PageTitleModule} from "../shared/page-title/page-title.module";
import {VehicleComponent} from './vehicle/vehicle.component';
import {TripModule} from "./trip/trip.module";
import {Select2Module} from "ng-select2-component";
import {NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [


        CompanyComponent,
        TripComponent,
        VehicleComponent,
    ],
    imports: [
        CommonModule,
        AppsRoutingModule,
        PageTitleModule,
        TripModule,
        Select2Module,
        NgbDatepickerModule,
        NgbPopoverModule,
        NgbTimepickerModule,
    ]
})
export class AppsModule {
}
