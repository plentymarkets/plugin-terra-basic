import {
    Observable,
    Observer
} from 'rxjs';
import { BasicBeerInterface } from './basic-beer.interface';
import { TerraKeyValueInterface } from '@plentymarkets/terra-components';
import { isNullOrUndefined } from 'util';

export class BasicBeerSource
{
    public get():Observable<BasicBeerInterface>
    {
        return new Observable((observer:Observer<BasicBeerInterface>):void =>
        {
            setTimeout(() =>
            {
                observer.next({
                    name:   'Ciuc',
                    vol:    5,
                    rating: 2
                });
            }, 2000);

            setTimeout(() =>
            {
                observer.next({
                    name:   'Silva',
                    vol:    7,
                    rating: 9
                });
            }, 4000);

            // setTimeout(() =>
            // {
            //     observer.next({
            //         name:'Silva',
            //         vol:7,
            //         rating:9
            //     });
            // }, 4000);
            //
            // setTimeout(() =>
            // {
            //     observer.next({
            //         name:'Silva',
            //         vol:7,
            //         rating:9
            //     });
            // }, 4000);

            setTimeout(() =>
            {
                observer.next({
                    name:   'Terapia Gold',
                    vol:    7,
                    rating: 9
                });
            }, 5000);

            // setTimeout(() =>
            // {
            //     observer.error('Couldnt fetch beer');
            // }, 2000);

            setTimeout(() =>
            {
                observer.complete();
            }, 6000);
        });
    }

    public getByName(name:string):Observable<BasicBeerInterface>
    {
        let beerList:Array<BasicBeerInterface> = [
            {
                name:   'Ciuc',
                vol:    10,
                rating: 10
            },
            {
                name:   'Silva',
                vol:    10,
                rating: 10
            },
            {
                name:   'Terapia Gold',
                vol:    10,
                rating: 10
            }
        ];

        return new Observable((observer:Observer<BasicBeerInterface>):void =>
        {
            let filteredBeerList:Array<BasicBeerInterface> = beerList.filter((beer:BasicBeerInterface) =>
            {
                return beer.name === name;
            });

            if(!isNullOrUndefined(filteredBeerList) && filteredBeerList.length > 0)
            {
                observer.next({
                    name:   name,
                    vol:    10,
                    rating: 10
                });
            }

            setTimeout(() =>
            {
                observer.complete();
            }, 6000);
        });
    }
}
