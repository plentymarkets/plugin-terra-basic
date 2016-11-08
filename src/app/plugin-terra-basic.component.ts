import {
    Component,
    ChangeDetectionStrategy
} from '@angular/core';
import { Locale } from 'angular2localization';

@Component({
               selector:        'plugin-terra-basic-app',
               template:        require('./plugin-terra-basic.component.html'),
               styles:          [require('./plugin-terra-basic.component.scss').toString()],
               changeDetection: ChangeDetectionStrategy.Default
           })

export class PluginTerraBasicComponent extends Locale
{
    
}