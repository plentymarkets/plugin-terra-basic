import { Pipe, PipeTransform } from '@angular/core';
import { L10nTranslatePipe } from 'angular-l10n';

/** A pipe that mimics the L10nTranslatePipe and always returns a string. */
@Pipe({
    name: 'translate'
})
export class TranslatePipe extends L10nTranslatePipe implements PipeTransform {
    public transform(key: any, language: string, params?: any): string {
        return super.transform(key, language, params) ?? '';
    }
}
