import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaypalSampleAppSharedModule } from '../shared';

import { OUR_TRAININGS_ROUTE, OurTrainingsComponent } from './';

@NgModule({
    imports: [PaypalSampleAppSharedModule, RouterModule.forRoot([OUR_TRAININGS_ROUTE], { useHash: true })],
    declarations: [OurTrainingsComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaypalSampleAppOurTrainingsModule {}
