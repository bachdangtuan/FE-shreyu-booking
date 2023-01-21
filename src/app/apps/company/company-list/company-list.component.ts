import {Component, Injector, OnChanges, OnInit} from '@angular/core';
import {BreadcrumbItem} from "../../../shared/page-title/page-title/page-title.model";
import {CompanyModel} from "../../../core/models/company.model";
import {Column} from "../../../core/models/common.models";
import {COLUMN_COMPANY} from "../../../core/constants/common";
import {CompanyService} from "../../../core/service/company.service";
import {FormGroup} from "@angular/forms";
import {SyncQueryParam} from "../../../core/decorators/syncParams.decorator";
import {FormSearchCompanyHelper} from "../../../core/helpers/formSearchCompany.helper";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {PARAM_URL} from "../../../core/constants/url";

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.scss'],
    providers: [
        FormSearchCompanyHelper,
    ],
})
export class CompanyListComponent implements OnInit {
    @SyncQueryParam({
        parseIgnore: ["status"],
    })
    public formSearchAndFilter: FormGroup;

    listRealEstate$!: Observable<CompanyModel[]>;
    // total$: Observable<number>;
    // page$: Observable<number>;
    // pageSize$: Observable<number>;
    // limit$: Observable<number>;
    limit: any
    pageCurrent: any
    pageTitle: BreadcrumbItem[] = [];
    records: CompanyModel[] = [];
    columns: Column[] = [];

    constructor(
        public injector: Injector,
        private route: ActivatedRoute,
        private formService: FormSearchCompanyHelper,
        private CompanyService: CompanyService,
        public router: Router,
    ) {
        this.formSearchAndFilter = formService.form;
        this.initTableCofig()
        this.getCompanyList()
    }

    ngOnInit(): void {
        this.pageTitle = [{label: 'Danh sách nhà xe', path: '/', active: true}];
        // this.formSearchAndFilter.patchValue({
        //     limit: "12",
        //     page: "1",
        // });
    }


    // get Company
    totalItems: any;

    getCompanyList() {
        const params$ = this.route.queryParams;
        console.log('params$', params$)
        params$.subscribe(param => {
            this.CompanyService.getCompany(param).subscribe(res => {
                console.log('res', res)
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

    /**
     * initialize advanced table columns
     */
    initTableCofig(): void {
        this.columns = COLUMN_COMPANY
    }

    RedirectToDetail(id: string, $event: any) {
        console.log('test')
        $event.stopPropagation();
        const url = PARAM_URL.DETAIL_COMPANY + "/" + id;
        this.router.navigate([url]).then();
    }
}
