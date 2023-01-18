import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleRoutingModule} from "./vehicle-routing.module";
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';


@NgModule({
    declarations: [


        VehicleListComponent,
          VehicleCreateComponent
    ],
    imports: [
        CommonModule,
        VehicleRoutingModule
    ]
})
export class VehicleModule {
}
