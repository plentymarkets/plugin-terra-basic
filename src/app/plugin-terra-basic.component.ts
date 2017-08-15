import { Component } from '@angular/core';
import {
    Translation,
    TranslationService
} from 'angular-l10n';

@Component({
               selector: 'plugin-terra-basic-app',
               template: require('./plugin-terra-basic.component.html'),
               styles:   [require('./plugin-terra-basic.component.scss')],
           })
export class PluginTerraBasicComponent extends Translation
{
    private myVariable:string;

    public constructor(public translation:TranslationService)
    {
        super(translation);

        this.myVariable = "Test123";
    }
}
