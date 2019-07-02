import { ModuleWithProviders } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { PtbStartViewComponent } from './views/ptb-start-view.component';
import { PtbRouterViewComponent } from './views/router/ptb-router-view.component';
import { PtbExampleViewComponent } from './views/example/ptb-example-view.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'plugin',
        pathMatch: 'full',
    },
    {
        path:      'plugin',
        component: PtbRouterViewComponent,
        children:  [
            {
                path: '',
                data:        {
                    label:       'menu'
                },
                redirectTo: 'start',
                pathMatch: 'full'
            },
            {
                path:      'start',
                component: PtbStartViewComponent,
                data:      {
                    label: 'start'
                }
            },
            {
                path:      'example',
                component: PtbExampleViewComponent,
                data:      {
                    label: 'example'
                }
            }
        ]
    },

];

export const appRoutingProviders:Array<any> = [];

export const routing:ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {useHash:true});
