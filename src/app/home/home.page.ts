import { Component, HostListener } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import * as e from 'express';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor() { };

    VGapi!: VgApiService;
    questionText: string = "";
    questionTitle: string = "Questions?";


    onPlayerReady(api: VgApiService) {
        this.VGapi = api;
    }
    setQuestion(q: number) {
        if (q == 1) {
            this.questionText = "You pick the time, type of the tea, and the place. First 30 minutes I show you how it works, tell you about the tea and next 90 minutes you enjoy.";
            this.questionTitle = "This is how it'll go...";
        } else if (q == 2) {
            this.questionText = "For group of friends (up to 6 people), for an individual, after yoga classes (up to 10 people)";
            this.questionTitle = "This is who can come...";
        } else if (q == 3) {
            this.questionText = "The ceremony will happen in one of the locations, and a time from 5 AM to 9 PM, you pick both time and place."
            this.questionTitle = "Location & time..."
        } else if (q == 4) {
            this.questionTitle = "Price";
            this.questionText = `
            20$ per person for 2 hours ceremony
            100$ for six people for 2 hours ceremony
            10$ per person for yoga classes            
            `;
        } else if (q == 5) {
            this.questionTitle = "Booking";
            this.questionText = "To book a ceremony, call Valentyna. The phone number is below.";
        }
    }



    // 493182124145154
    // -3hlb4GU8eOG9uw--EhePSrMKJc

}
