import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HcPortalSharedModule } from '../../shared';
import {
    VsHeartRateService,
    VsHeartRatePopupService,
    VsHeartRateComponent,
    VsHeartRateDetailComponent,
    VsHeartRateDialogComponent,
    VsHeartRatePopupComponent,
    VsHeartRateDeletePopupComponent,
    VsHeartRateDeleteDialogComponent,
    vsHeartRateRoute,
    vsHeartRatePopupRoute,
    VsHeartRateResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...vsHeartRateRoute,
    ...vsHeartRatePopupRoute,
];

@NgModule({
    imports: [
        HcPortalSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        VsHeartRateComponent,
        VsHeartRateDetailComponent,
        VsHeartRateDialogComponent,
        VsHeartRateDeleteDialogComponent,
        VsHeartRatePopupComponent,
        VsHeartRateDeletePopupComponent,
    ],
    entryComponents: [
        VsHeartRateComponent,
        VsHeartRateDialogComponent,
        VsHeartRatePopupComponent,
        VsHeartRateDeleteDialogComponent,
        VsHeartRateDeletePopupComponent,
    ],
    providers: [
        VsHeartRateService,
        VsHeartRatePopupService,
        VsHeartRateResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HcPortalVsHeartRateModule {}
