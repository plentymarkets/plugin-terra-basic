import {
    Component,
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

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
