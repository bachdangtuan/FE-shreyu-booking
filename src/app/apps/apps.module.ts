import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { CompanyComponent } from './company/company.component';
import { TripComponent } from './trip/trip.component';
import {PageTitleModule} from "../shared/page-title/page-title.module";



@NgModule({
  declarations: [


    CompanyComponent,
        TripComponent
  ],
    imports: [
        CommonModule,
        AppsRoutingModule,
        PageTitleModule
    ]
})
export class AppsModule { }
