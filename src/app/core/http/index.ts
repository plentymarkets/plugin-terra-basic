import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    AlertService,
    AuthInterceptor,
    ErrorInterceptor,
    LoadingInterceptor,
    TerraLoadingSpinnerService
} from '@plentymarkets/terra-components';
import {
    LocaleService,
    TranslationService
} from 'angular-l10n';

export const interceptorProviders:Array<Provider> = [
    {
        provide:  HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi:    true
    },
    {
        provide:  HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi:    true,
        deps:     [AlertService, TranslationService, LocaleService]
    },
    {
        provide:  HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi:    true,
        deps:     [TerraLoadingSpinnerService]
    }
];
