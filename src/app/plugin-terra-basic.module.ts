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
import { BasicContactService } from './contact/basic-contact.service';
import { LargeDirective } from './directives/large.directive';
@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
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
