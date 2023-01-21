import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../company-detail.model';

@Component({
    selector: 'app-profile-company-info',
    templateUrl: './company-info.component.html',
    styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

    @Input() company?: any = {};

    constructor() {
    }

    ngOnInit(): void {
    }

}
