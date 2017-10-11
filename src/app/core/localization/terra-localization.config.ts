import { Injectable } from '@angular/core';
import {
    LocaleService,
    TranslationService
} from 'angular-l10n';

@Injectable()
export class LocalizationConfig
{
    constructor(public locale:LocaleService, public translation:TranslationService)
    {
    }

    load():Promise<any>
    {
        //Definitions for i18n
        if(process.env.ENV === 'production')
        {
            let deploymentTerraHash = (<any>window).deploymentTerraHash;
            this.translation
                .addConfiguration()
                .addProvider('assets/lang/locale_')
                .addProvider('assets/lang/terra-components/locale-');
        }
        else
        {
            this.translation.addConfiguration()
                .addProvider('src/app/assets/lang/locale_')
                .addProvider('node_modules/@plentymarkets/terra-components/app/assets/lang/locale-');
        }

        this.locale.addConfiguration()
            .addLanguages(['de',
                           'en'])
            .setCookieExpiration(30)
            .defineDefaultLocale('en', 'EN');

        let langInLocalStorage:string = localStorage.getItem('plentymarkets_lang_');

        if(langInLocalStorage !== null)
        {
            this.locale.setCurrentLanguage(langInLocalStorage);
        }
        else
        {
            let lang = navigator.language.slice(0, 2).toLocaleLowerCase();

            if(lang !== 'de' && lang !== 'en')
            {
                lang = 'en';
            }

            this.locale.setCurrentLanguage(lang);

            localStorage.setItem('plentymarkets_lang_', lang);
        }

        let promise:Promise<any> = new Promise((resolve:any) =>
        {
            this.translation.translationChanged.subscribe(() =>
            {
                resolve(true);
            });
        });

        this.locale.init();
        this.translation.init();

        return promise;
    }
}
