import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { OurTrainingsComponent } from './our-trainings.component';

export const OUR_TRAININGS_ROUTE: Route = {
    path: 'our-trainings',
    component: OurTrainingsComponent,
    data: {
        authorities: [],
        pageTitle: 'our-trainings.title'
    },
    canActivate: [UserRouteAccessService]
};
