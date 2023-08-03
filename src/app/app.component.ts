import { Component } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor() {
        const som = new Cloudinary({ cloud: { cloudName: 'drkvembrf', apiKey: "493182124145154", apiSecret: "-3hlb4GU8eOG9uw--EhePSrMKJc", } });
    }
}
