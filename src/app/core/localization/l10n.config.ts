import { L10nConfig } from 'angular-l10n';
import { l10nPluginTerraBasic } from '../../translations/l10n-plugin-terra-basic';
import { l10nTerraComponents } from '@plentymarkets/terra-components';

export const l10nConfig: L10nConfig = {
    defaultLocale: {
        language: 'de',
        currency: 'EUR'
    },
    format: 'language',
    keySeparator: '.',
    cache: true,
    providers: [
        { name: 'plugin-terra-basic', asset: l10nPluginTerraBasic },
        { name: 'terra-components', asset: l10nTerraComponents }
    ],
    schema: [
        { locale: { language: 'de', currency: 'EUR' }, dir: 'ltr', text: 'Deutsch' },
        { locale: { language: 'en', currency: 'GBP' }, dir: 'ltr', text: 'English' }
    ]
};
