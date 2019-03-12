import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaypalSampleAppSharedModule } from 'app/shared';
import {
    PaypalCompletedPaymentsComponent,
    PaypalCompletedPaymentsDetailComponent,
    PaypalCompletedPaymentsUpdateComponent,
    PaypalCompletedPaymentsDeletePopupComponent,
    PaypalCompletedPaymentsDeleteDialogComponent,
    paypalCompletedPaymentsRoute,
    paypalCompletedPaymentsPopupRoute
} from './';

const ENTITY_STATES = [...paypalCompletedPaymentsRoute, ...paypalCompletedPaymentsPopupRoute];

@NgModule({
    imports: [PaypalSampleAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PaypalCompletedPaymentsComponent,
        PaypalCompletedPaymentsDetailComponent,
        PaypalCompletedPaymentsUpdateComponent,
        PaypalCompletedPaymentsDeleteDialogComponent,
        PaypalCompletedPaymentsDeletePopupComponent
    ],
    entryComponents: [
        PaypalCompletedPaymentsComponent,
        PaypalCompletedPaymentsUpdateComponent,
        PaypalCompletedPaymentsDeleteDialogComponent,
        PaypalCompletedPaymentsDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaypalSampleAppPaypalCompletedPaymentsModule {}
