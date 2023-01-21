import {Component, Input, OnInit} from '@angular/core';
import {ListTaskItem} from 'src/app/apps/tasks/shared/tasks.model';

@Component({
    selector: 'app-company-tasks',
    templateUrl: './company-tasks.component.html',
    styleUrls: ['./company-tasks.component.scss']
})
export class CompanyTasksComponent implements OnInit {

    @Input() taskList: ListTaskItem[] = [];
    @Input() listTrip: any[] = [];
    paginateData: any[] = [];
    page = 1;
    pageSize = 4;
    collectionSize = 0;

    constructor() {
    }

    ngOnInit(): void {
        this.collectionSize = this.listTrip.length;
        this.getPremiumData()
    }

    getPremiumData() {
        this.paginateData = this.listTrip
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    }
}
