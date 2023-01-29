import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({providedIn: 'root'})
export class LogService {

    constructor(public http: HttpClient) {
    }

    public getListLogging(param: any): Observable<any> {
        return this.http.get(API_URL.LIST_LOG, {
            params: param
        }) as Observable<any>;
    }

}
