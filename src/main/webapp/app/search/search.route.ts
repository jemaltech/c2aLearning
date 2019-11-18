import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { SearchComponent } from './search.component';

export const SEARCH_ROUTE: Route = {
    path: 'search',
    component: SearchComponent,
    data: {
        authorities: [],
        pageTitle: 'search.title'
    },
    canActivate: [UserRouteAccessService]
};
