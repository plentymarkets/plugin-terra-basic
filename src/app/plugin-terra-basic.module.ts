import {
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { HttpModule } from '@angular/http';
import { FormsModule,
    ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { BasicBeerComponent } from './beer/basic-beer.component';
import { BasicBeerService } from './beer/basic-beer.service';
import { BasicBeerSource } from './beer/basic-beer.source';
import { BasicBarComponent } from './bar/basic-bar.component';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        TerraComponentsModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        PluginTerraBasicComponent,
        BasicBeerComponent,
        BasicBarComponent
    ],
    providers:    [
        BasicBeerService,
        BasicBeerSource
    ],
    bootstrap:    [
        PluginTerraBasicComponent
    ]
})
export class PluginTerraBasicModule
{
}
