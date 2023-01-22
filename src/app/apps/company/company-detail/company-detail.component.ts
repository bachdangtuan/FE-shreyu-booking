import {Component, OnInit} from '@angular/core';
import {PROJECTLIST} from 'src/app/apps/projects/shared/data';
import {Project} from 'src/app/apps/projects/shared/projects.model';
import {TODAYTASKS, UPCOMINGTASKS} from 'src/app/apps/tasks/shared/data';
import {ListTaskItem} from 'src/app/apps/tasks/shared/tasks.model';
import {AuthenticationService} from 'src/app/core/service/auth.service';
import {BreadcrumbItem} from 'src/app/shared/page-title/page-title/page-title.model';
import {ACTIVITYTIMELINE, FILES, MESSAGES} from './data';
import {ActivityItem, FileItem, Message, UserInfo} from './company-detail.model';
import {CompanyService} from "../../../core/service/company.service";
import {ActivatedRoute} from "@angular/router";
import {TripModel} from "../../../core/models/trip";

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

    // user?: UserInfo;
    // activities: ActivityItem[] = [];
    // projects: Project[] = [];
    // files: FileItem[] = [];
    // messages: Message[] = [];
    // taskList: ListTaskItem[] = [];


    public pageTitle: BreadcrumbItem[] = [];
    public companyDetail: any
    public active: string = 'tasks';
    public idParam!: string | number;
    public companyTrip!: Array<TripModel>
    public vehicle!: Array<any>


    constructor(
        private authService: AuthenticationService,
        private CompanyService: CompanyService,
        private route: ActivatedRoute,
    ) {
        this.route.params.subscribe(param => {
            const {id} = param;
            this.idParam = id
        })
    }


    ngOnInit(): void {
        this.pageTitle = [{label: 'Company', path: '/'}, {label: 'Detail', path: '/', active: true}];
        this.getDetailCompany()
        // this._fetchData();
    }

    getDetailCompany() {
        this.CompanyService.getCompanyDetail(this.idParam).pipe().subscribe(res => {
            const {trip, vehicle} = res
            // console.log('res', res)
            this.companyDetail = res
            this.companyTrip = trip
            this.vehicle = vehicle
        })
    }

    /**
     * fetch data
     */
    // _fetchData(): void {
    //     this.activities = ACTIVITYTIMELINE;
    //     this.messages = MESSAGES;
    //     this.files = FILES;
    //     this.projects = PROJECTLIST;
    //     this.taskList = [...TODAYTASKS, ...UPCOMINGTASKS];
    // }

}
