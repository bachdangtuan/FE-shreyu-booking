import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({providedIn: 'root'})
export class StationService {

    constructor(public http: HttpClient) {
    }

    public getStation(): Observable<any> {
        return this.http.get(API_URL.LIST_STATION) as Observable<any>;
    }

    public createStation(createForm: any): Observable<any> {
        return this.http.post(API_URL.CREATE_TRIP, createForm) as Observable<any>;
    }

}
