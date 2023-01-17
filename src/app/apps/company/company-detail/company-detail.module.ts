import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';

import { PersonalInfoComponent } from './company-info/personal-info.component';
import {CompanyTasksComponent} from "./company-tasks/company-tasks.component";
import {CompanyVehicleComponent} from "./company-vehicle/company-vehicle.component";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        // ProfileComponent,
        PersonalInfoComponent,
        CompanyTasksComponent,
        CompanyVehicleComponent
    ],
    exports: [
        PersonalInfoComponent,
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
