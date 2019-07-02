import { ModuleWithProviders } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { StartViewComponent } from './views/ptb-start-view.component';
import { RouterViewComponent } from './views/router/ptb-router-view.component';
import { ExampleViewComponent } from './views/example/ptb-example-view.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'plugin',
        pathMatch: 'full',
    },
    {
        path:      'plugin',
        component: RouterViewComponent,
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
                component: StartViewComponent,
                data:      {
                    label: 'start'
                }
            },
            {
                path:      'example',
                component: ExampleViewComponent,
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
