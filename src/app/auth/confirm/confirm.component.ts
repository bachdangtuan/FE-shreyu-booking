import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TITLE} from "../../core/constants/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
    count = 5;

    constructor(private titleService: Title,
                private router: Router) {
    }

    ngOnInit(): void {
        this.titleService.setTitle(TITLE.REGISTER)
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
