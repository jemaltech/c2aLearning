import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { PaypalSampleAppSharedModule } from 'app/shared';
import { PaypalSampleAppCoreModule } from 'app/core';
import { PaypalSampleAppAppRoutingModule } from './app-routing.module';
import { PaypalSampleAppHomeModule } from './home/home.module';
import { PaypalSampleAppAccountModule } from './account/account.module';
import { PaypalSampleAppEntityModule } from './entities/entity.module';
import * as moment from 'moment';
import { PaypalSampleAppPaypalPaymentsModule } from './paypal-payments/paypal-payments.module';
import { PaypalSampleAppTestServicesModule } from './test-services/test-services.module';
import { PaypalSampleAppTestToolsModule } from './test-tools/test-tools.module';
import { PaypalSampleAppOurTrainingsModule } from './our-trainings/our-trainings.module';
import { PaypalSampleAppAboutUsModule } from './about-us/about-us.module';
import { PaypalSampleAppContactUsModule } from './contact-us/contact-us.module';
import { PaypalSampleAppSearchModule } from './search/search.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            alertTimeout: 5000
        }),
        PaypalSampleAppSharedModule.forRoot(),
        PaypalSampleAppCoreModule,
        PaypalSampleAppHomeModule,
        PaypalSampleAppAccountModule,
        PaypalSampleAppPaypalPaymentsModule,
        PaypalSampleAppTestServicesModule,
        PaypalSampleAppTestToolsModule,
        PaypalSampleAppOurTrainingsModule,
        PaypalSampleAppAboutUsModule,
        PaypalSampleAppContactUsModule,
        PaypalSampleAppSearchModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        PaypalSampleAppEntityModule,
        PaypalSampleAppAppRoutingModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class PaypalSampleAppAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
