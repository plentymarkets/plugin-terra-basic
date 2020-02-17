import {
    Component,
    Input
} from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    selector:    'ptb-start',
    templateUrl: './start.component.html',
    styleUrls:   ['./start.component.scss'],
})
export class StartComponent
{
    @Language()
    public lang:string;

    @Input()
    public myTitle:string;

    public _tt:string = 'Start here';

    public redirectToDevelopersTutorial():void
    {
        window.open('https://developers.plentymarkets.com/tutorials/angular-plugin', '_blank');
    }
}
