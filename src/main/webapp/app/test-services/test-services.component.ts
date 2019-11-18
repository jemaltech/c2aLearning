import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-test-services',
    templateUrl: './test-services.component.html',
    styleUrls: ['test-services.component.scss']
})
export class TestServicesComponent implements OnInit {
    message: string;

    constructor() {
        this.message = 'TestServicesComponent message';
    }

    ngOnInit() {}
}
