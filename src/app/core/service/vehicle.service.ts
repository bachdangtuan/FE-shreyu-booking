import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({providedIn: 'root'})
export class VehicleService {

    constructor(public http: HttpClient) {
    }

    public createVehicle(form: any): Observable<any> {
        console.log('form', form)
        return this.http.post(API_URL.CREATE_VEHICLE, form
        ) as Observable<any>
    }


    public getVehicle(param: any): Observable<any> {
        console.log('param', param)
        return this.http.get(API_URL.LIST_VEHICLE, {
            params: param
        }) as Observable<any>;
    }
}
