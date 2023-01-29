import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDatepickerModule, NgbPopoverModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {Select2Module} from "ng-select2-component";
import {LogRoutingModule} from "./log-routing.module";
import {LogListComponent} from "./log-list/log-list.component";
import {PageTitleModule} from "../../shared/page-title/page-title.module";
import {AdvancedTableModule} from "../../shared/advanced-table/advanced-table.module";
import {UiModule} from "../../shared/ui/ui.module";


@NgModule({
    declarations: [


        LogListComponent
    ],
    exports: [
        LogListComponent

    ],
    imports: [
        LogRoutingModule,
        CommonModule,
        NgbTimepickerModule,
        Select2Module,
        NgbDatepickerModule,
        NgbPopoverModule,
        PageTitleModule,
        AdvancedTableModule,
        UiModule,
    ]
})
export class LogModule {
}
