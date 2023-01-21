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

    constructor() {
    }

    ngOnInit(): void {
    }

}
