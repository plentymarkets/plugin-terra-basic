import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { StartComponent } from './start/start.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';

@NgModule({
              imports:      [
                  BrowserModule,
                  HttpModule,
                  FormsModule,
                  TranslationModule.forRoot(),
                  TerraComponentsModule.forRoot()
              ],
              declarations: [
                  PluginTerraBasicComponent,
                  StartComponent,
                  TestComponent
              ],
              providers:    [],
              bootstrap:    [
                  PluginTerraBasicComponent
              ]
          })
export class PluginTerraBasicModule
{
}
