import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-test-tools',
    templateUrl: './test-tools.component.html',
    styleUrls: ['test-tools.component.scss']
})
export class TestToolsComponent implements OnInit {
    message: string;

    constructor() {
        this.message = 'TestToolsComponent message';
    }

    ngOnInit() {}
}
