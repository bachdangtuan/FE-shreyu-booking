import {Component, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
    pageTitle: BreadcrumbItem[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Danh sách nhà xe', path: '/', active: true}];
    }

}
