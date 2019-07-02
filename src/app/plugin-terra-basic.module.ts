import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { PtbStartComponent } from './views/start/ptb-start.component';
import { HttpModule } from '@angular/http';
import {
    L10nLoader,
    TranslationModule
} from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import { l10nConfig } from './core/localization/l10n.config';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
    appRoutingProviders,
    routing
} from './plugin-terra-basic.routing';
import { PtbStartViewComponent } from './views/ptb-start-view.component';
import { PtbRouterViewComponent } from './views/router/ptb-router-view.component';
import { PtbMainMenuComponent } from './views/menu/ptb-main-menu.component';
import {
    httpInterceptorProviders,
    TerraNodeTreeConfig
} from '@plentymarkets/terra-components';
import { PtbExampleViewComponent } from './views/example/ptb-example-view.component';
import { PtbTableComponent } from './views/example/overview/table/ptb-table.component';
import { PtbFilterComponent } from './views/example/overview/filter/ptb-filter.component';
import { PtbOverviewViewComponent } from './views/example/overview/ptb-overview-view.component';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        TranslationModule.forRoot(l10nConfig),
        RouterModule.forRoot([]),
        TerraComponentsModule,
        routing
    ],
    declarations: [
        PluginTerraBasicComponent,
        PtbRouterViewComponent,
        PtbMainMenuComponent,
        PtbStartViewComponent,
        PtbStartComponent,
        PtbExampleViewComponent,
        PtbTableComponent,
        PtbFilterComponent,
        PtbOverviewViewComponent
    ],
    providers:    [
        {
            provide:    APP_INITIALIZER,
            useFactory: initL10n,
            deps:       [L10nLoader],
            multi:      true
        },
        httpInterceptorProviders,
        appRoutingProviders,
        TerraNodeTreeConfig
    ],
    bootstrap:    [
        PluginTerraBasicComponent
    ]
})
export class PluginTerraBasicModule
{
    constructor(public l10nLoader:L10nLoader)
    {
        this.l10nLoader.load();
    }
}

function initL10n(l10nLoader:L10nLoader):Function
{
    return ():Promise<void> => l10nLoader.load();
}
