import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from 'src/app/core/service/auth.service';
import {TITLE} from "../../core/constants/common";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loading: boolean = false;
    returnUrl: string = '/dashboard/ecommerce';
    loginForm!: FormGroup;
    formSubmitted: boolean = false;
    error: string = '';

    showPassword: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private fb: FormBuilder,
        private titleService: Title
    ) {
        titleService.setTitle(TITLE.LOGIN)
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['admin', [Validators.required]],
            password: ['123123', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();


        // get return url from route parameters or default to '/'

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard/ecommerce';

    }

    /**
     * convenience getter for easy access to form fields
     */
    get formValues() {
        return this.loginForm.controls;
    }


    /**
     * On submit form
     */
    onSubmit(): void {
        this.formSubmitted = true;
        if (this.loginForm.valid) {
            const formUser = this.loginForm.value
            this.loading = true;
            this.authenticationService.loginUser(formUser)
                .pipe(first())
                .subscribe(
                    (data: any) => {
                        if (data && data.accessToken) {
                            // store user details and jwt in session
                            sessionStorage.setItem('currentUser', JSON.stringify(data));
                            this.router.navigate([this.returnUrl]).then();
                        }
                    },
                    (error: any) => {
                        this.error = error;
                        this.loading = false;
                    });
        }
    }


}
