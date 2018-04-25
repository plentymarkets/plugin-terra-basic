import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        TranslationModule.forRoot(l10nConfig),
        TerraComponentsModule.forRoot()
    ],
    declarations: [
        PluginTerraBasicComponent,
        StartComponent
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
