import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyRoutingModule} from "./company-routing.module";
import {CompanyListComponent} from './company-list/company-list.component';
import {PageTitleModule} from "../../shared/page-title/page-title.module";
import {CompanyDetailModule} from "./company-detail/company-detail.module";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { CompanyCreateComponent } from './company-create/company-create.component';


@NgModule({
    declarations: [
        CompanyDetailComponent,
        CompanyListComponent,
        CompanyCreateComponent
    ],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        PageTitleModule,
        CompanyDetailModule,
        NgbNavModule,
    ]
})
export class CompanyModule {
}
