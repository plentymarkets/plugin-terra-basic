import { Injectable } from '@angular/core';
import {
    Observable,
    Observer
} from 'rxjs';
import { BasicBeerInterface } from './basic-beer.interface';
import { BasicBeerSource } from './basic-beer.source';
import {
    tap,
    map,
    filter,
    distinctUntilChanged
} from 'rxjs/operators';

@Injectable()
export class BasicBeerService
{
    constructor(private basicBeerSource:BasicBeerSource)
    {
    }

    public getBeers():Observable<BasicBeerInterface>
    {
        return this.basicBeerSource.get().pipe(
            // tap(() =>
            // {
            //     console.log('tap triggered');
            // }),
            // map((beer:BasicBeerInterface) =>
            // {
            //     beer.rating = 10;
            //     return beer;
            // }),
            // filter((beer:BasicBeerInterface) =>
            // {
            //     return beer.rating > 8;
            // }),
            // distinctUntilChanged((beerOne:BasicBeerInterface, beerTwo:BasicBeerInterface) =>
            // {
            //     return JSON.stringify(beerOne) === JSON.stringify(beerTwo);
            // })
        );
    }

    public getBeerByName(beerName:string):Observable<BasicBeerInterface>
    {
        return this.basicBeerSource.getByName(beerName);
    }
}
