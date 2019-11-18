import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-our-trainings',
    templateUrl: './our-trainings.component.html',
    styleUrls: ['our-trainings.component.scss']
})
export class OurTrainingsComponent implements OnInit {
    message: string;

    constructor() {
        this.message = 'OurTrainingsComponent message';
    }

    ngOnInit() {}
}
