import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
    pageTitle: any;

    constructor() {
    }

    ngOnInit(): void {
        //set title web
        this.pageTitle = [{label: 'Danh sách nhà xe', path: '/'}, {label: 'Tạo mới', path: '/', active: true}];
    }

}
