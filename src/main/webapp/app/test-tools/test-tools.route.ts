import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { TestToolsComponent } from './test-tools.component';

export const TEST_TOOLS_ROUTE: Route = {
    path: 'test-tools',
    component: TestToolsComponent,
    data: {
        authorities: [],
        pageTitle: 'test-tools.title'
    },
    canActivate: [UserRouteAccessService]
};
