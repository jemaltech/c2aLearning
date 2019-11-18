import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaypalSampleAppSharedModule } from '../shared';

import { TEST_SERVICES_ROUTE, TestServicesComponent } from './';

@NgModule({
    imports: [PaypalSampleAppSharedModule, RouterModule.forRoot([TEST_SERVICES_ROUTE], { useHash: true })],
    declarations: [TestServicesComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaypalSampleAppTestServicesModule {}
