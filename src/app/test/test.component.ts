import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
               selector: 'test',
               template: require('./test.component.html'),
               styles:   [require('./test.component.scss')],
           })
export class TestComponent implements OnInit
{
    @Input() myTitle:string;

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
