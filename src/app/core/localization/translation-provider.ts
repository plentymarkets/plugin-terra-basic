import {
    Inject,
    Injectable
} from '@angular/core';
import {
    Caching,
    L10N_CONFIG,
    L10nConfigRef,
    L10nTranslationProvider
} from 'angular-l10n';
import {
    HttpBackend,
    HttpClient
} from '@angular/common/http';

/**
 * @description A custom TranslationProvider alà angular-l10n which uses a clean instance of the HttpClient.
 * The HttpClient instance then "dispatches the requests directly to the backend without going through the interceptor chain" that is attached to the
 * root injector. See https://angular.io/api/common/http/HttpBackend#description for details.
 *
 * NOTE: This is only a workaround since angular-l10n's TranslationService uses the instance of the HttpClient from the root injector. Apparently,
 * this is the app's injector wherefore the app and the TranslationService share the same instance of the HttpClient and all registered interceptors
 * apply to the requests of the translation files. Those will eventually fail in production.
 */
@Injectable()
export class TranslationProvider extends L10nTranslationProvider
{
    constructor(private httpBackend:HttpBackend,
                @Inject(L10N_CONFIG) config:L10nConfigRef,
                caching:Caching)
    {
        super(new HttpClient(httpBackend), config, caching);
    }
}
