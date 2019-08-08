import { ModuleWithProviders } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }
];

export const appRoutingProviders:Array<any> = [];

export const routing:ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {useHash:true});
