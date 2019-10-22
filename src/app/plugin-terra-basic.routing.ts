import { ModuleWithProviders } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { StartViewComponent } from './views/start-view.component';
import { RouterViewComponent } from './views/router/router-view.component';
import { ExampleViewComponent } from './views/example/example-view.component';
import { SplitViewComponent } from './views/split-view/split-view.component';

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
            },
            {
                path: 'split-view',
                component: SplitViewComponent,
                data: {
                    label: 'Split view'
                }
            }
        ]
    },

];

export const appRoutingProviders:Array<any> = [];

export const routing:ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {useHash:true});
