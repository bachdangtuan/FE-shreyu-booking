import {Component, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../shared/page-title/page-title/page-title.model";

@Component({
    selector: 'app-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
    pageTitle: BreadcrumbItem[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Danh sách lộ trình', path: '/', active: true}];
    }

}
