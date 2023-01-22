import {Component, Injector, OnInit} from '@angular/core';
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormSearchCompanyHelper} from "../../../core/helpers/formSearchCompany.helper";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {CompanyModel} from "../../../core/models/company.model";
import {Column} from "../../../core/models/common.models";
import {PARAM_URL} from "../../../core/constants/url";
import {VehicleService} from "../../../core/service/vehicle.service";
import {COLUMN_VEHICLE} from "../../../core/constants/common";

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.scss'],
    providers: [
        FormSearchCompanyHelper,
    ],
})
export class VehicleListComponent implements OnInit {
    @SyncQueryParam({
        parseIgnore: ["status"],
    })
    public formSearchAndFilter: FormGroup;
    pageTitle: BreadcrumbItem[] = [];
    pageCurrent: any
    records: CompanyModel[] = [];
    columns: any = [];
    totalItems: any;
    limit: any

    constructor(
        public injector: Injector,
        private route: ActivatedRoute,
        private formService: FormSearchCompanyHelper,
        private vehicleService: VehicleService,
        public router: Router,
    ) {
        this.formSearchAndFilter = formService.form;
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Danh sách xe', path: '/', active: true}];
        this.getVehicleList()
        this.initTableCofig()
    }

    updatePage(data: number): void {
        this.formService.form.patchValue({
            page: data,
        });
    }

    RedirectToDetail(id: string, $event: any) {
        console.log('test')
        $event.stopPropagation();
        // const url = PARAM_URL.DETAIL_COMPANY + "/" + id;
        // this.router.navigate([url]).then();
    }

    initTableCofig(): void {
        this.columns = COLUMN_VEHICLE
    }

    getVehicleList() {
        const params$ = this.route.queryParams;
        console.log('params$', params$)
        params$.subscribe(param => {
            this.vehicleService.getVehicle(param).subscribe(res => {
                this.totalItems = res?.totalItems
                this.records = res.data
                this.limit = res.limit
                this.pageCurrent = res?.thisPage
            })
        })
    }

}
