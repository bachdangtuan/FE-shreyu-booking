import {Component, Injector, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormControl, FormGroup} from "@angular/forms";
import {COLUMN_TRIP, STATUS, STATUS_CONTENT, STATUS_VALUE} from "../../../core/constants/common";
import {TripService} from "../../../core/service/trip.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormSearchTripHelper} from "../../../core/helpers/formSearchTrip.helper";
import {Select2Data, Select2UpdateEvent} from "ng-select2-component";

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

    status: Select2Data = []
    STATUS_VALUE: any = STATUS_VALUE;
    STATUS_CONTENT: any = STATUS_CONTENT;


    constructor(
        public injector: Injector,
        private route: ActivatedRoute,
        private formService: FormSearchTripHelper,
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
        this.pageTitle = [{label: 'Danh s??ch l??? tr??nh', path: '/', active: true}];
        this.status = STATUS
    }

    changeSelectedStatus($event: Select2UpdateEvent) {
        const valueSearch = $event.options[0].value


        if (valueSearch !== '10') {
            this.formSearchAndFilter.addControl('status', new FormControl())
            this.formSearchAndFilter.patchValue({
                status: valueSearch,
            });
        } else {
            this.formSearchAndFilter.removeControl('status')
        }


        // console.log('huihu', $event.options[0])
    }
}
