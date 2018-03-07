import {
    Component,
    OnInit
} from '@angular/core';

@Component({
               selector: 'stats-view',
               template: require('./stats-view.component.html'),
               styles:   [require('./stats-view.component.scss')]
           })
export class StatsViewComponent implements OnInit
{
    constructor()
    {
    }

    public ngOnInit():void
    {
    }
}
