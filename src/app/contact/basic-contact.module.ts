import {
    NgModule
} from '@angular/core';
import { BasicContactComponent } from './basic-contact.component';
import { BasicContactService } from './basic-contact.service';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';

@NgModule({
    imports:      [
        TerraComponentsModule
    ],
    declarations: [
        BasicContactComponent
    ],
    providers:    [
        BasicContactService
    ],
    exports: [
        BasicContactComponent
    ]
})
export class BasicContactModule
{
}
