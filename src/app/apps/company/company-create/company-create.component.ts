import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
    pageTitle: any;
    files: File[] = [];
    validationGroup1!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private sanitizer: DomSanitizer
    ) {
        this.validationGroup1 = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            address: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        });


    }

    get form1() {
        return this.validationGroup1.controls;
    }

    ngOnInit(): void {
        //set title web
        this.pageTitle = [{label: 'Danh sách nhà xe', path: '/'}, {label: 'Tạo mới', path: '/', active: true}];
    }

    onSelect(event: any) {
        this.files.push(...event.addedFiles);
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
}
