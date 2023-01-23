import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {VehicleService} from "../../../core/service/vehicle.service";
import {Select2Data} from "ng-select2-component";

import {TYPECAR} from "../../../core/constants/typeCar";

@Component({
    selector: 'app-vehicle-create',
    templateUrl: './vehicle-create.component.html',
    styleUrls: ['./vehicle-create.component.scss']
})
export class VehicleCreateComponent implements OnInit {
    validCreateCompany!: FormGroup;
    public pageTitle: any
    files: File[] = [];
    countries: Select2Data = [];

    constructor(
        private fb: FormBuilder,
        private VehicleService: VehicleService,
        private sanitizer: DomSanitizer
    ) {

        this.validCreateCompany = this.fb.group({
            name: ['', Validators.required],
            driver: ['', Validators.required],
            type: ['', Validators.required],
            numberRegister: ['', Validators.required],
            description: ['', Validators.required],
            avatar: ['', Validators.required],
        });

    }

    ngOnInit(): void {
        //set title web
        this.countries = TYPECAR;
        this.pageTitle = [{label: 'Danh sách xe', path: '/'}, {label: 'Tạo mới', path: '/', active: true}];
    }

    onSelect(event: any) {
        console.log('event', event.addedFiles[0])
        this.files.push(...event.addedFiles);
        this.validCreateCompany.patchValue({
            avatar: event.addedFiles[0],
        })
    }

    // create Company
    createCompany() {
        // console.log(this.validCreateCompany.value)
        if (!this.validCreateCompany.invalid) {
            const formRegisterVehicle: any = new FormData();
            formRegisterVehicle.append('name', this.validCreateCompany.get('name')?.value);
            formRegisterVehicle.append('driver', this.validCreateCompany.get('driver')?.value);
            formRegisterVehicle.append('numberRegister', this.validCreateCompany.get('numberRegister')?.value);
            formRegisterVehicle.append('type', this.validCreateCompany.get('type')?.value);
            formRegisterVehicle.append('description', this.validCreateCompany.get('description')?.value);
            formRegisterVehicle.append('avatar', this.validCreateCompany.get('avatar')?.value);
            this.VehicleService.createVehicle(formRegisterVehicle).pipe(
                catchError((err) => {
                    return throwError(err);
                })
            ).subscribe(res => {
                console.log(res)
            })
        }

    }

    submitFormCompany() {
        this.createCompany()
    }

    get form1() {
        return this.validCreateCompany.controls;
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }

    onClick(event: any): void {
        event.stopPropagation();
    }

    getPreviewUrl(f: File) {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + URL.createObjectURL(f) + ')');
    }
}
