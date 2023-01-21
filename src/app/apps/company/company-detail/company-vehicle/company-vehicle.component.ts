import {Component, Input, OnInit} from '@angular/core';
import {Project} from 'src/app/apps/projects/shared/projects.model';

@Component({
    selector: 'app-company-vehicle',
    templateUrl: './company-vehicle.component.html',
    styleUrls: ['./company-vehicle.component.scss']
})
export class CompanyVehicleComponent implements OnInit {

    @Input() vehicle: any[] = [];
    displayCount: number = 3;
    modifiedTeamMembers: any = [];


    paginateData: any[] = [];
    page = 1;
    pageSize = 3;
    collectionSize = 0;

    constructor() {
    }

    ngOnInit(): void {
        this.collectionSize = this.vehicle.length;
        this.getPremiumData()
    }

    getPremiumData() {
        this.paginateData = this.vehicle
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    /**
     * get remaining members to display
     * @param memberList member list
     */
    getDisplayMembersList(memberList: any): any {
        if (memberList.length <= this.displayCount || (memberList.length - this.displayCount) == 1) {
            this.modifiedTeamMembers = memberList;
        } else {
            this.modifiedTeamMembers = memberList.filter((m: any, index: number) => index < this.displayCount)
        }
        return this.modifiedTeamMembers;
    }

}
