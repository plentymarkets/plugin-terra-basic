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
