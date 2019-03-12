import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaypalSampleAppSharedModule } from '../shared';

import { PAYPAL_PAYMENTS_ROUTE, PaypalPaymentsComponent } from './';

@NgModule({
    imports: [
      PaypalSampleAppSharedModule,
      RouterModule.forRoot([ PAYPAL_PAYMENTS_ROUTE ], { useHash: true })
    ],
    declarations: [
      PaypalPaymentsComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaypalSampleAppPaypalPaymentsModule {}
