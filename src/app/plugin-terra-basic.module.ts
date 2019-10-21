import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { StartComponent } from './views/start/start.component';
import { HttpModule } from '@angular/http';
import {
    L10N_CONFIG,
    L10nConfig,
    L10nLoader,
    TranslationModule
} from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import { l10nConfig } from './core/localization/l10n.config';
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
    TerraComponentsModule,
    TerraNodeTreeConfig
} from '@plentymarkets/terra-components';
import { ExampleViewComponent } from './views/example/example-view.component';
import { TableComponent } from './views/example/overview/table/table.component';
import { FilterComponent } from './views/example/overview/filter/filter.component';
import { OverviewViewComponent } from './views/example/overview/overview-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslationProvider } from './core/localization/translation-provider';
import { ContactService } from './services/contact.service';
import { BasicTableService } from './services/basic-table.service';
import { PlaceHolderService } from './core/placeholder/placeholder.service';
import { MatSelectModule } from '@angular/material';

@NgModule({
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        TranslationModule.forRoot(l10nConfig, { translationProvider: TranslationProvider }),
        RouterModule.forRoot([]),
        TerraComponentsModule,
        routing,
        MatSelectModule
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
            deps:       [L10nLoader, L10N_CONFIG],
            multi:      true
        },
        httpInterceptorProviders,
        appRoutingProviders,
        TerraNodeTreeConfig,
        ContactService,
        BasicTableService,
        PlaceHolderService
    ],
    bootstrap:    [
        PluginTerraBasicComponent
    ]
})
export class PluginTerraBasicModule
{
}

export function getLanguage():string
{
    let langInLocalStorage:string = localStorage.getItem('plentymarkets_lang_');
    let lang:string = null;

    if(langInLocalStorage !== null)
    {
        lang = langInLocalStorage;
    }
    else
    {
        lang = navigator.language.slice(0, 2).toLocaleLowerCase();

        if(lang !== 'de' && lang !== 'en')
        {
            lang = 'en';
        }

        localStorage.setItem('plentymarkets_lang_', lang);
    }

    return lang;
}

export function initL10n(l10nLoader:L10nLoader, config:L10nConfig):Function
{
    return ():Promise<void> =>
    {
        config.locale.language = getLanguage();
        return l10nLoader.load();
    };
}
