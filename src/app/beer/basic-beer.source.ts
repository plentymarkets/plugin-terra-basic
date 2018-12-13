import { Observable, Observer } from 'rxjs';
import { BasicBeerInterface } from './basic-beer.interface';

export class BasicBeerSource
{
    public get():Observable<BasicBeerInterface>
    {
        return new Observable((observer:Observer<BasicBeerInterface>):void =>
        {
            setTimeout(() =>
            {
                observer.next({
                    name:'Ciuc',
                    vol:5,
                    rating:2
                });
            }, 2000);

            setTimeout(() =>
            {
                observer.next({
                    name:'Silva',
                    vol:7,
                    rating:9
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
                    name:'Terapia Gold',
                    vol:7,
                    rating:9
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
}
