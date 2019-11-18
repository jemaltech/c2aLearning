import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaypalSampleAppSharedModule } from '../shared';

import { CONTACT_US_ROUTE, ContactUsComponent } from './';

@NgModule({
    imports: [PaypalSampleAppSharedModule, RouterModule.forRoot([CONTACT_US_ROUTE], { useHash: true })],
    declarations: [ContactUsComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaypalSampleAppContactUsModule {}
