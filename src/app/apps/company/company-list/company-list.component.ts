import {Component, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {TABLEDATA} from "../../../pages/tables/advance/data";
import {CompanyModel} from "../../../core/models/company.model";
import {PersonRecord} from "../../../pages/tables/advance/advance.model";
import {Column} from "../../../core/models/common.models";
import {COLUMN_COMPANY} from "../../../core/constants/common";

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    pageTitle: BreadcrumbItem[] = [];
    records: PersonRecord[] = [];
    columns: Column[] = [];
    pageSizeOptions: number[] = [10, 25, 50, 100];

    constructor() {
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Danh sách nhà xe', path: '/', active: true}];
        this.initTableCofig()
        this._fetchData()
    }

    _fetchData(): void {
        this.records = TABLEDATA;
    }

    /**
     * initialize advanced table columns
     */
    initTableCofig(): void {
        this.columns = COLUMN_COMPANY
    }
}
