import {Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {StationService} from "../../../core/service/station.service";
import {catchError, map} from "rxjs/operators";
import {noop, throwError} from "rxjs";
import {NgbDatepicker, NgbDateStruct, NgbPopover, NgbPopoverConfig, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {DateTimeModel} from "../../../core/models/date-time.model";
import {FormBuilder, FormGroup, NgControl, Validators} from "@angular/forms";


@Component({
    selector: 'app-trip-create',
    templateUrl: './trip-create.component.html',
    styleUrls: ['./trip-create.component.scss']
})
export class TripCreateComponent implements OnInit {

    @ViewChild(NgbDatepicker)
    private dp!: NgbDatepicker;

    @ViewChild(NgbPopover)
    private popover!: NgbPopover;

    @Input() dateString!: string;
    @Input() inputDatetimeFormat = 'M/d/yyyy H:mm:ss';
    @Input() hourStep = 1;
    @Input() minuteStep = 15;
    @Input() secondStep = 30;
    @Input() seconds = true;
    @Input() disabled = false;

    showTimePickerToggle = false;

    public datetime: DateTimeModel = new DateTimeModel();
    private firstTimeAssign = true;
    private onTouched: () => void = noop;
    private onChange: (_: any) => void = noop;

    // ngControl!: NgControl;
    pageTitle: any;
    public stations: any;

    validCreateTrip!: FormGroup;

    constructor(
        private config: NgbPopoverConfig,
        private fb: FormBuilder,
        private inj: Injector,
        private StationService: StationService
    ) {
        config.autoClose = 'outside';
        config.placement = 'auto';
        this.initFormCreateTrip()
    }

    ngOnInit(): void {
        this.getStationList()
        this.pageTitle = [{label: 'Tạo lộ trình', path: '/'}, {label: 'Tạo mới', path: '/', active: true}];
        // this.ngControl = this.inj.get(NgControl);
    }

    initFormCreateTrip() {
        this.validCreateTrip = this.fb.group({
            fromStation: ['', Validators.required],
            toStation: ['', Validators.required],
            price: ['', Validators.required],
            startTime: ['', Validators.required],
        });
    }


    getStationList() {
        this.StationService.getStation().pipe(
            catchError(err => throwError(err))
        ).subscribe(res => {
            this.stations = res.map((station: { id: any; name: any; province: any }) => {
                return {
                    options: [
                        {value: station.id, label: `[${station.province}]` + ' - ' + station.name},
                    ]
                }
            });
        })
    }

    ngAfterViewInit(): void {
        this.popover.hidden.subscribe(($event) => {
            this.showTimePickerToggle = false;
        });
    }

    writeValue(newModel: string) {
        if (newModel) {
            this.datetime = Object.assign(
                this.datetime,
                DateTimeModel.fromLocalString(newModel)
            );
            this.dateString = newModel;
            this.setDateStringModel();
        } else {
            this.datetime = new DateTimeModel();
        }
    }

    toggleDateTimeState($event: any) {
        this.showTimePickerToggle = !this.showTimePickerToggle;
        $event.stopPropagation();
    }

    onInputChange($event: any) {
        const value = $event.target.value;
        const dt = DateTimeModel.fromLocalString(value);

        if (dt) {
            this.datetime = dt;
            this.setDateStringModel();
        } else if (value.trim() === '') {
            this.datetime = new DateTimeModel();
            this.dateString = '';
            this.onChange(this.dateString);
        } else {
            this.onChange(value);
        }
    }

    onDateChange($event: any) {
        // @ts-ignore
        if ($event?.year) {
            // @ts-ignore
            $event = `${$event.year}-${$event.month}-${$event.day}`
        }

        // @ts-ignore
        const date = DateTimeModel.fromLocalString($event);

        if (!date) {
            this.dateString = this.dateString;
            return;
        }

        if (!this.datetime) {
            this.datetime = date;
        }

        this.datetime.year = date.year;
        this.datetime.month = date.month;
        this.datetime.day = date.day;
        this.dateString = $event;
        // this.dp.navigateTo({
        //     year: this.datetime.year,
        //     month: this.datetime.month,
        // });
        console.log('test', this.dateString);
        this.setDateStringModel();
    }

    onTimeChange(event: NgbTimeStruct) {
        this.datetime.hour = event.hour;
        this.datetime.minute = event.minute;
        this.datetime.second = event.second;

        this.setDateStringModel();
    }

    setDateStringModel() {
        this.dateString = this.datetime.toString();
        this.validCreateTrip.get('startTime')?.setValue(this.dateString)
        if (!this.firstTimeAssign) {
            this.onChange(this.dateString);
        } else {
            // Skip very first assignment to null done by Angular
            if (this.dateString !== null) {
                this.firstTimeAssign = false;
            }
        }
    }

    inputBlur($event: any) {
        this.onTouched();
    }

    get form1() {
        return this.validCreateTrip.controls;
    }

    createTrip() {
        if (this.validCreateTrip.valid) {
            const createForm = this.validCreateTrip.value

            this.StationService.createStation(createForm).pipe(
                catchError(err => throwError(err))
            ).subscribe(data => {
                    console.log('data', data)
                }
            )
        }
    }
}
