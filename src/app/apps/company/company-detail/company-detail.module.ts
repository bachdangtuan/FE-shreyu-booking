import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';

import { CompanyInfoComponent } from './company-info/company-info.component';
import {CompanyTasksComponent} from "./company-tasks/company-tasks.component";
import {CompanyVehicleComponent} from "./company-vehicle/company-vehicle.component";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        // ProfileComponent,
        CompanyInfoComponent,
        CompanyTasksComponent,
        CompanyVehicleComponent
    ],
    exports: [
        CompanyInfoComponent,
        CompanyTasksComponent,
        CompanyVehicleComponent
    ],
    imports: [
        CommonModule,
        NgbProgressbarModule,
        NgbNavModule,
        NgbTooltipModule,
        PageTitleModule,
        RouterModule,

    ]
})
export class CompanyDetailModule { }
