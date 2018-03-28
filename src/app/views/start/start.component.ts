import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'start',
    template: require('./start.component.html'),
    styles:   [require('./start.component.scss')],
})
export class StartComponent implements OnInit
{
    @Input() myTitle:string;

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
