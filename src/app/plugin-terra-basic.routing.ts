import { ModuleWithProviders } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { StartComponent } from './views/start/start.component';

const appRoutes:Routes = [
    {
        path: '',
        component: StartComponent
    }
];

export const appRoutingProviders:Array<any> = [];

export const routing:ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {useHash:true});
