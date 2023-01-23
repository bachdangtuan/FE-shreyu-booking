import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({providedIn: 'root'})
export class TripService {

    constructor(public http: HttpClient) {
    }

    public getTrip(param: any): Observable<any> {
        console.log('param', param)
        return this.http.get(API_URL.LIST_TRIP, {
            params: param
        }) as Observable<any>;
    }
}
