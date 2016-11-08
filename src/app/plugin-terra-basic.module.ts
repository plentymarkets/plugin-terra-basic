import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent }   from './plugin-terra-basic.component';
import { StartComponent } from './start/start.component';

@NgModule({
              imports:      [BrowserModule],
              declarations: [PluginTerraBasicComponent,
                             StartComponent],
              bootstrap:    [PluginTerraBasicComponent]
          })
export class PluginTerraBasicModule
{
}