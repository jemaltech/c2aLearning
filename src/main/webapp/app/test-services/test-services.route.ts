import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { TestServicesComponent } from './test-services.component';

export const TEST_SERVICES_ROUTE: Route = {
    path: 'test-services',
    component: TestServicesComponent,
    data: {
        authorities: [],
        pageTitle: 'test-services.title'
    },
    canActivate: [UserRouteAccessService]
};
