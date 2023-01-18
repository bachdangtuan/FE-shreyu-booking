import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {User} from '../models/auth.models';
import {loggedInUser} from '../helpers/utils';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";


@Injectable({providedIn: 'root'})
export class AuthenticationService {
    user: User | null = null;

    constructor(private http: HttpClient) {
    }

    /**********************************************************
     ********************** API PHẦN USER **********************
     ***********************************************************/

    // đăng nhập
    public loginUser(user: any): Observable<any> {
        return this.http.post(API_URL.LOGIN, user) as Observable<any>;
    }

    // đăng ký
    public createUser(user: any): Observable<User> {
        return this.http.post(API_URL.CREATE, user) as Observable<User>;
    }






    /**
     * Returns the current user
     */
    public currentUser(): User | null {
        if (!this.user) {
            this.user = loggedInUser();
        }
        return this.user;
    }

    /**
     * Performs the login auth
     * @param email
     * @param password
     */
    login(email: string, password: string): any {
        return this.http.post<any>(`/api/login`, {email, password})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    this.user = user;
                    // store user details and jwt in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    /**
     * Performs the signup auth
     * @param name name of user
     * @param email email of user
     * @param password password of user
     */
    signup(name: string, email: string, password: string): any {
        return this.http.post<any>(`/api/signup`, {name, email, password})
            .pipe(map(user => user));

    }


    /**
     * Logout the user
     */
    logout(): void {
        // remove user from session storage to log user out
        sessionStorage.removeItem('currentUser');
        this.user = null;
    }
}

