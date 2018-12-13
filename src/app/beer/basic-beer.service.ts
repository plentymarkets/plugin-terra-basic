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
    }
}
