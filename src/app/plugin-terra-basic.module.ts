import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent }   from './plugin-terra-basic.component';
import { StartComponent } from './start/start.component';
//import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import {
    LocalizationModule,
    LocalizationService,
    LocaleService,
    LocaleModule
} from 'angular2localization';
import { HttpModule } from '@angular/http';

@NgModule({
              imports:      [
                  BrowserModule,
                  HttpModule,
                  LocaleModule,
                  LocalizationModule,
                  //TerraComponentsModule.forRoot()
              ],
              declarations: [
                  PluginTerraBasicComponent,
                  StartComponent
              ],
              providers:    [
                  LocaleService,
                  LocalizationService
              ],
              bootstrap:    [
                  PluginTerraBasicComponent
              ]
          })
export class PluginTerraBasicModule
{
}
