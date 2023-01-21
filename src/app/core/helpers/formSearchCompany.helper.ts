import {FormControl, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";
import {SearchCompanyParams} from "../models/form-search-company.model";

@Injectable({
    providedIn: "root",
})
export class FormSearchCompanyHelper {
    readonly #form: FormGroup;

    constructor() {
        this.#form = FormSearchCompanyHelper.initForm();
    }

    get form() {
        return this.#form as FormGroup;
    }

    private static initForm(data?: SearchCompanyParams): FormGroup {
        return new FormGroup({
            // search: new FormControl(data?.search || ""),
            page: new FormControl(data?.page || 1),
            limit: new FormControl(data?.limit || 10),
            // status: new FormControl(data?.status || [""]),
            // type: new FormControl(data?.type || [""]),
        });
    }
}
