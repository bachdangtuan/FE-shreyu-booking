import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthenticationService} from 'src/app/core/service/auth.service';
import {TITLE} from "../../core/constants/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
    count = 3;

    constructor(private authenticationService: AuthenticationService, private titleService: Title, private router: Router) {
        titleService.setTitle(TITLE.REGISTER)
    }

    ngOnInit(): void {
        this.authenticationService.logout();
        this.countDownNumber()
    }

    countDownNumber() {
        const intervalId = setInterval(() => {
            this.count--;
            console.log('cout', this.count)
            if (this.count == 0) {
                clearInterval(intervalId)
                this.router.navigate(['/auth/login']).then();
            }
        }, 800)
    }
}
