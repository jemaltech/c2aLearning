import { NgModule } from '@angular/core';

import { PaypalSampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PaypalSampleAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PaypalSampleAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PaypalSampleAppSharedCommonModule {}
