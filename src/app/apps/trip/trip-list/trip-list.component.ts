import {Component, Injector, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {CompanyModel} from "../../../core/models/company.model";
import {Column} from "../../../core/models/common.models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormSearchCompanyHelper} from "../../../core/helpers/formSearchCompany.helper";
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormGroup} from "@angular/forms";
import {COLUMN_TRIP} from "../../../core/constants/common";
import {TripService} from "../../../core/service/trip.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-trip-list',
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
    @SyncQueryParam({
        parseIgnore: ["status"],
    })
    public formSearchAndFilter: FormGroup;
    pageTitle: BreadcrumbItem[] = [];
    limit: any
    pageCurrent: any
    records: any[] = [];
    columns: any[] = [];
    totalItems: any;

    constructor(
        public injector: Injector,
        private route: ActivatedRoute,
        private formService: FormSearchCompanyHelper,
        private TripService: TripService,
        public router: Router,
        private _NgbModal: NgbModal
    ) {

        this.formSearchAndFilter = formService.form;
        this.initTableCofig()
        this.getCompanyList()
    }


    getCompanyList() {
        const params$ = this.route.queryParams;
        // console.log('params$', params$)
        params$.subscribe(param => {
            this.TripService.getTrip(param).subscribe(res => {
                this.totalItems = res?.totalItems
                this.records = res.data
                this.limit = res.limit
                this.pageCurrent = res?.thisPage
            })
        })
    }

    updatePage(data: number): void {
        this.formService.form.patchValue({
            page: data,
        });
    }

    initTableCofig(): void {
        this.columns = COLUMN_TRIP
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Danh sách lộ trình', path: '/', active: true}];
    }

}
