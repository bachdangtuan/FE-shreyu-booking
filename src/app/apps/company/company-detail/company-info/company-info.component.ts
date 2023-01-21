import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../company-detail.model';

@Component({
    selector: 'app-profile-company-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

    @Input() user?: UserInfo = {};

    constructor() {
    }

    ngOnInit(): void {
    }

}
