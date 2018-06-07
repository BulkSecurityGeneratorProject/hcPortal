import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HcPortalSharedModule } from '../../shared';
import {
    BloodTestService,
    BloodTestPopupService,
    BloodTestComponent,
    BloodTestDetailComponent,
    BloodTestDialogComponent,
    BloodTestPopupComponent,
    BloodTestDeletePopupComponent,
    BloodTestDeleteDialogComponent,
    bloodTestRoute,
    bloodTestPopupRoute,
    BloodTestResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...bloodTestRoute,
    ...bloodTestPopupRoute,
];

@NgModule({
    imports: [
        HcPortalSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BloodTestComponent,
        BloodTestDetailComponent,
        BloodTestDialogComponent,
        BloodTestDeleteDialogComponent,
        BloodTestPopupComponent,
        BloodTestDeletePopupComponent,
    ],
    entryComponents: [
        BloodTestComponent,
        BloodTestDialogComponent,
        BloodTestPopupComponent,
        BloodTestDeleteDialogComponent,
        BloodTestDeletePopupComponent,
    ],
    providers: [
        BloodTestService,
        BloodTestPopupService,
        BloodTestResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HcPortalBloodTestModule {}
