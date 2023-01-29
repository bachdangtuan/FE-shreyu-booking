import {Component, Injector, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {Select2Data, Select2UpdateEvent} from "ng-select2-component";
import {
    COLUMN_LOG,
    COLUMN_TRIP,
    STATUS,
    STATUS_CODE,
    STATUS_CONTENT,
    STATUS_VALUE
} from "../../../core/constants/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FormSearchTripHelper} from "../../../core/helpers/formSearchTrip.helper";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TripService} from "../../../core/service/trip.service";
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormControl, FormGroup} from "@angular/forms";
import {LogService} from "../../../core/service/log.service";

@Component({
    selector: 'app-log-list',
    templateUrl: './log-list.component.html',
    styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {
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
    STATUS_CODE: any = STATUS_CODE;
    STATUS_CONTENT: any = STATUS_CONTENT;

    constructor(
        public injector: Injector,
        private route: ActivatedRoute,
        private formService: FormSearchTripHelper,
        private LogService: LogService,
        public router: Router,
        private _NgbModal: NgbModal
    ) {
        this.formSearchAndFilter = formService.form;
        this.initTableCofig()
        this.getLogList()
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Hệ thống Log Server', path: '/', active: true}];
        this.status = STATUS
    }

    getLogList() {
        const params$ = this.route.queryParams;
        // console.log('params$', params$)
        params$.subscribe(param => {
            this.LogService.getListLogging(param).subscribe(res => {
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
        this.columns = COLUMN_LOG
    }

    // changeSelectedStatus($event: Select2UpdateEvent) {
    //     const valueSearch = $event.options[0].value
    //
    //
    //     if (valueSearch !== '10') {
    //         this.formSearchAndFilter.addControl('status', new FormControl())
    //         this.formSearchAndFilter.patchValue({
    //             status: valueSearch,
    //         });
    //     } else {
    //         this.formSearchAndFilter.removeControl('status')
    //     }
    //
    //
    //     // console.log('huihu', $event.options[0])
    // }
}
