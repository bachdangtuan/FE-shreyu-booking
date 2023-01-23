import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleRoutingModule} from "./vehicle-routing.module";
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import {VehicleCreateComponent} from './vehicle-create/vehicle-create.component';
import {PageTitleModule} from "../../shared/page-title/page-title.module";
import {AdvancedTableModule} from "../../shared/advanced-table/advanced-table.module";
import {UiModule} from "../../shared/ui/ui.module";
import {NgxDropzoneModule} from "ngx-dropzone";
import {ReactiveFormsModule} from "@angular/forms";
import {Select2Module} from "ng-select2-component";


@NgModule({
    declarations: [


        VehicleListComponent,
        VehicleCreateComponent
    ],
    imports: [
        CommonModule,
        VehicleRoutingModule,
        PageTitleModule,
        AdvancedTableModule,
        UiModule,
        NgxDropzoneModule,
        ReactiveFormsModule,
        Select2Module
    ]
})
export class VehicleModule {
}
