import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from 'src/app/core/service/auth.service';
import {TITLE} from "../../core/constants/common";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    signUpForm!: FormGroup;
    formSubmitted: boolean = false;
    showPassword: boolean = false;
    loading: boolean = false;
    error: string = '';

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private titleService: Title
    ) {
        titleService.setTitle(TITLE.REGISTER)
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            name: ['', Validators.required],
            numberPhone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    /**
     * convenience getter for easy access to form fields
     */
    get formValues() {
        return this.signUpForm.controls;
    }


    /**
     * On form submit
     */
    onSubmit(): void {
        this.formSubmitted = true;
        if (this.signUpForm.valid) {
            const formCreateUser = this.signUpForm.value
            this.loading = true;
            this.authenticationService.createUser(formCreateUser)
                .pipe(first())
                .subscribe(
                    (data: any) => {
                        console.log('data', data)
                        // navigates to confirm mail screen
                        this.router.navigate(['/auth/confirm']).then();
                    },
                    (error: any) => {
                        console.log('error', error)
                        this.error = error;
                        this.loading = false;
                    });
        }
    }
}
