import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    selector: 'start',
    template: require('./start.component.html'),
    styles:   [require('./start.component.scss')],
})
export class StartComponent implements OnInit
{
    @Language()
    public lang:string;

    @Input()
    public myTitle:string;

    constructor()
    {
    }

    public ngOnInit():void
    {
    }

    public redirectToDevelopersTutorial():void
    {
        window.open('https://developers.plentymarkets.com/tutorials/angular-plugin', '_blank');
    }
}
