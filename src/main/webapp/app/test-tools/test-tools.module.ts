import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaypalSampleAppSharedModule } from '../shared';

import { TEST_TOOLS_ROUTE, TestToolsComponent } from './';

@NgModule({
    imports: [PaypalSampleAppSharedModule, RouterModule.forRoot([TEST_TOOLS_ROUTE], { useHash: true })],
    declarations: [TestToolsComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaypalSampleAppTestToolsModule {}
