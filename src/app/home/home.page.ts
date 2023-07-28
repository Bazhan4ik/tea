import { Component, HostListener } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor() { };

    VGapi!: VgApiService;



    @HostListener('document:click', ['$event'])
    playOnClick(event: MouseEvent) {

        if (this.VGapi && this.VGapi.canPlay) {
            this.VGapi.play();
        }
    }

    @HostListener("document:load", ["$event"])
    playOnScroll(event: MouseEvent) {

        if (this.VGapi && this.VGapi.canPlay) {
            this.VGapi.play();
        }
    }




    onPlayerReady(api: VgApiService) {
        console.log("PLAYER READY");

        this.VGapi = api;

        api.getDefaultMedia().play();


        const subs = api.getDefaultMedia().subscriptions.canPlay.subscribe(() => {

            console.log("CAN PLAY", api.canPlay);
            if (api.canPlay) {
                api.play();
                subs.unsubscribe();
            }
        });

        api.getDefaultMedia().subscriptions.pause.subscribe(() => {

            api.play();

        });

        setTimeout(() => {
            if (api.canPlay) {
                api.play();
            }
        }, 1000);

    }

}
