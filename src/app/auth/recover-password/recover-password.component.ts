import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {AuthenticationService} from "../../core/service/auth.service";
import {catchError} from "rxjs/operators";
import {of, throwError} from "rxjs";

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {


    resetPassswordForm!: FormGroup;
    formSubmitted: boolean = false;
    successMessage: string = "";
    errorMessage: string = "";


    constructor(private fb: FormBuilder,
                private titleService: Title,
                private AuthenticationService: AuthenticationService
    ) {
        titleService.setTitle("Recover Password | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template")
    }

    ngOnInit(): void {
        this.resetPassswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    /**
     * convenience getter for easy access to form fields
     */
    get formValues() {
        return this.resetPassswordForm.controls;
    }

    /**
     * On form submit
     */
    onSubmit(): void {
        this.formSubmitted = true;
        if (this.resetPassswordForm.valid) {
            const email = this.resetPassswordForm.value;
            this.AuthenticationService.resetPassword(email).pipe(
                catchError(err => of(err))
            ).subscribe(res => {
                if (res?.user) {
                    this.successMessage = "Mật khẩu đã được gửi vào email của bạn";
                } else {
                    this.errorMessage = res
                }
            })
        }
    }

}
