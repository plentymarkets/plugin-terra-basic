import {
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PluginTerraBasicComponent } from './plugin-terra-basic.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { BasicContactComponent } from './contact/basic-contact.component';
import { LargeDirective } from './contact/large.directive';
import { BasicContactService } from './contact/basic-contact.service';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        HttpClientModule,
        TerraComponentsModule.forRoot()
    ],
    declarations: [
        PluginTerraBasicComponent,
        BasicContactComponent,
        LargeDirective
    ],
    providers:    [
        BasicContactService
    ],
    bootstrap:    [
        PluginTerraBasicComponent
    ]
})
export class PluginTerraBasicModule
{
}
