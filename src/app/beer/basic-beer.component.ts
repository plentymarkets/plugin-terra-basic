import {
    Component,
    OnInit
} from '@angular/core';
import { BasicBeerService } from './basic-beer.service';
import { BasicBeerInterface } from './basic-beer.interface';

@Component({
    selector: 'basic-beer',
    template: require('./basic-beer.component.html'),
    styles: [require('./basic-beer.component.scss')]
})
export class BasicBeerComponent implements OnInit
{
    constructor(private basicBeerService:BasicBeerService)
    {
    }

    public ngOnInit():void
    {
        this.basicBeerService.getBeers().subscribe((beer:BasicBeerInterface) =>
            {
                console.log('Basic Beer Component:');
                console.log(beer);
            },
            (error:string) =>
            {
                console.log(error);
            },
            () =>
            {
            });
    }
}
