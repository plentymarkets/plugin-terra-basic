import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
               selector:      'start',
               template:      require('./start.component.html'),
               styles:        [require('./start.component.scss').toString()],
               encapsulation: ViewEncapsulation.None
           })

export class StartComponent implements OnInit
{
    constructor()
    {
        
    }
    
    ngOnInit()
    {
    }
    
    
}
