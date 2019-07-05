import {
    L10nConfig,
    ProviderType,
    StorageStrategy
} from 'angular-l10n';

export const l10nConfig:L10nConfig = getL10nConfig();

function getL10nConfig():L10nConfig
{
    let langInLocalStorage:string = localStorage.getItem('plentymarkets_lang_');
    let lang:string = null;

    if(langInLocalStorage !== null)
    {
        lang = langInLocalStorage;
    }
    else
    {
        lang = navigator.language.slice(0, 2).toLocaleLowerCase();

        if(lang !== 'de' && lang !== 'en')
        {
            lang = 'en';
        }

        localStorage.setItem('plentymarkets_lang_', lang);
    }

    let prefix:string = 'assets/lang/locale-';
    let terraComponentsLocalePrefix:string = 'assets/lang/terra-components/locale-';

    return {
        locale:      {
            languages: [
                {
                    code: 'en',
                    dir:  'ltr'
                },
                {
                    code: 'de',
                    dir:  'ltr'
                }
            ],
            language:  lang,
            storage:   StorageStrategy.Cookie
        },
        translation: {
            providers:            [
                {
                    type:   ProviderType.Static,
                    prefix: prefix
                },
                {
                    type:   ProviderType.Static,
                    prefix: terraComponentsLocalePrefix
                }
            ],
            caching:              true,
            composedKeySeparator: '.',
            i18nPlural:           false
        }
    };
}
