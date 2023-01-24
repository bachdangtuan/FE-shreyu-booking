import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TripDetailComponent} from './trip-detail/trip-detail.component';
import {TripRoutingModule} from "./trip-routing.module";
import {TripListComponent} from './trip-list/trip-list.component';
import {PageTitleModule} from "../../shared/page-title/page-title.module";
import {AdvancedTableModule} from "../../shared/advanced-table/advanced-table.module";
import {UiModule} from "../../shared/ui/ui.module";
import {NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { TripCreateComponent } from './trip-create/trip-create.component';
import {Select2Module} from "ng-select2-component";


@NgModule({
    declarations: [

        TripDetailComponent,
        TripListComponent,
        TripCreateComponent
    ],
    exports: [
        TripListComponent
    ],
    imports: [
        CommonModule,
        NgbTimepickerModule,
        TripRoutingModule,
        PageTitleModule,
        AdvancedTableModule,
        UiModule,
        Select2Module,
        NgbDatepickerModule,
        NgbPopoverModule,
    ]
})
export class TripModule {
}
