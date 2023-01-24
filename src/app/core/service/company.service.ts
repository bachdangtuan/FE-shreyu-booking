import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "multipart/form-data; "// 👈
    })
};

@Injectable({providedIn: 'root'})
export class CompanyService {

    constructor(private http: HttpClient) {
    }

    /**********************************************************
     ********************** API PHẦN COMPANY **********************
     ***********************************************************/


    public getCompany(param: any): Observable<any> {
        console.log('param', param)
        return this.http.get(API_URL.LIST_COMPANY, {
            params: param
        }) as Observable<any>;
    }

    public getCompanyDetail(id: any): Observable<any> {
        return this.http.get(`${API_URL.DETAIL_COMPANY}/${id}`) as Observable<any>;
    }


    public createCompany(form: any): Observable<any> {
        console.log('form', form)
        return this.http.post(API_URL.CREATE_COMPANY, form
        ) as Observable<any>
    }

}

