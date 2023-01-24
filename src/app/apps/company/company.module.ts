import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyRoutingModule} from "./company-routing.module";
import {CompanyListComponent} from './company-list/company-list.component';
import {PageTitleModule} from "../../shared/page-title/page-title.module";
import {CompanyDetailModule} from "./company-detail/company-detail.module";
import {NgbNavModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { CompanyCreateComponent } from './company-create/company-create.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import {ReactiveFormsModule} from "@angular/forms";
import {UiModule} from "../../shared/ui/ui.module";
import {AdvancedTableModule} from "../../shared/advanced-table/advanced-table.module";


@NgModule({
    declarations: [
        CompanyDetailComponent,
        CompanyListComponent,
        CompanyCreateComponent,
    ],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        PageTitleModule,
        CompanyDetailModule,
        NgbNavModule,
        NgxDropzoneModule,
        ReactiveFormsModule,
        UiModule,
        NgbPaginationModule,
        AdvancedTableModule,
    ]
})
export class CompanyModule {
}
