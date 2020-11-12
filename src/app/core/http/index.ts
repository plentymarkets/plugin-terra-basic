import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    AlertService,
    AuthInterceptor,
    ErrorInterceptor,
    LoadingInterceptor,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';
import { L10N_LOCALE, L10nTranslationService } from 'angular-l10n';

export const interceptorProviders: Array<Provider> = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
        deps: [AlertService, L10nTranslationService, L10N_LOCALE]
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true,
        deps: [TerraLoadingSpinnerService]
    }
];
