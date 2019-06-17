import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { StartComponent } from './views/start/start.component';
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
import { StartViewComponent } from './views/start-view.component';
import { RouterViewComponent } from './views/router/router-view.component';
import { MainMenuComponent } from './views/menu/main-menu.component';
import {
    httpInterceptorProviders,
    TerraNodeTreeConfig
} from '@plentymarkets/terra-components';
import { ExampleViewComponent } from './views/example/example-view.component';
import { TableComponent } from './views/example/overview/table/table.component';
import { FilterComponent } from './views/example/overview/filter/filter.component';
import { OverviewViewComponent } from './views/example/overview/overview-view.component';

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
        RouterViewComponent,
        MainMenuComponent,
        StartViewComponent,
        StartComponent,
        ExampleViewComponent,
        TableComponent,
        FilterComponent,
        OverviewViewComponent
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
