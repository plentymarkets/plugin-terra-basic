import {
    NgModule
} from '@angular/core';
import { BasicPluginComponent } from './basic-plugin.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';

@NgModule({
    imports:      [
        TerraComponentsModule
    ],
    declarations: [
        BasicPluginComponent
    ],
    providers:    [
    ],
    exports: [
        BasicPluginComponent
    ]
})
export class BasicPluginModule
{
}
