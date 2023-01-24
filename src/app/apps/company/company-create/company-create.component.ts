import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../../core/service/company.service";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
    pageTitle: any;
    files: File[] = [];
    validCreateCompany!: FormGroup;



    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService,
        private sanitizer: DomSanitizer
    ) {
        this.validCreateCompany = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            description: ['', Validators.required],
            avatar: ['', Validators.required],
        });

        // this.form = this.fb.group({
        //     name: [''],
        //     avatar: [null],
        // });

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
        // const formRegister = this.validCreateCompany.value
        // console.log('formRegister', formRegister)
        const formRegister: any = new FormData();
        formRegister.append('name', this.validCreateCompany.get('name')?.value);
        formRegister.append('email', this.validCreateCompany.get('email')?.value);
        formRegister.append('phone', this.validCreateCompany.get('phone')?.value);
        formRegister.append('address', this.validCreateCompany.get('address')?.value);
        formRegister.append('description', this.validCreateCompany.get('description')?.value);
        formRegister.append('avatar', this.validCreateCompany.get('avatar')?.value);

        this.companyService.createCompany(formRegister).pipe(
            catchError((err) => {
                return throwError(err);
            })
        ).subscribe(res => {
            console.log(res)
        })
    }

    submitFormCompany() {
        this.createCompany()
    }

    get form1() {
        return this.validCreateCompany.controls;
    }

    ngOnInit(): void {
        //set title web
        this.pageTitle = [{label: 'Danh sách nhà xe', path: '/'}, {label: 'Tạo mới', path: '/', active: true}];
    }


    /**
     * removes file from uploaded files
     * @param event event
     */
    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }

    /**
     * Formats the size
     */
    getSize(f: File) {
        const bytes = f.size;
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];

    }

    /**
     * returns preview url of file
     * @param f file
     */
    getPreviewUrl(f: File) {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + URL.createObjectURL(f) + ')');
    }

    /**
     * stops event propogation
     */
    onClick(event: any): void {
        event.stopPropagation();
    }

    // uploadFile(event: any) {
    //     // @ts-ignore
    //     const file = (event.target as HTMLInputElement).files[0];
    //     console.log('file', file)
    //     this.form.patchValue({
    //         avatar: file,
    //     });
    //     console.log(this.form.get('avatar')?.value)
    //     this.form.get('avatar')?.updateValueAndValidity()
    // }
    //
    // submitForm() {
    //     const formData: any = new FormData();
    //     formData.append('name', this.form.get('name')?.value);
    //     formData.append('avatar', this.form.get('avatar')?.value);
    //
    //
    //     console.log('formData', formData)
    //     this.companyService.createCompany(formData).subscribe({
    //         next: (response) => console.log(response),
    //         error: (error) => console.log(error),
    //     })
    // }
}
