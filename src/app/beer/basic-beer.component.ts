import {
    Component,
    OnInit
} from '@angular/core';
import { BasicBeerService } from './basic-beer.service';
import { BasicBeerInterface } from './basic-beer.interface';
import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap
} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'basic-beer',
    template: require('./basic-beer.component.html'),
    styles:   [require('./basic-beer.component.scss')]
})
export class BasicBeerComponent implements OnInit
{
    private beerForm:FormGroup;

    constructor(private basicBeerService:BasicBeerService)
    {
        this.beerForm = new FormGroup({
            beerName: new FormControl('', Validators.required)
        });
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

        // this.beerForm.valueChanges
        //     .pipe(
        //         debounceTime(400),
        //         distinctUntilChanged())
        //     .subscribe(
        //         (formValue:string) =>
        //         {
        //             console.log(formValue);
        //
        //             this.basicBeerService.getBeerByName(formValue).subscribe((beer:BasicBeerInterface) =>
        //             {
        //                 //handle response
        //             });
        //         }
        //     );

        let $stringInputObservable:Observable<string> = this.beerForm.valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged());

        let $beerObservable:Observable<BasicBeerInterface> =
            $stringInputObservable.pipe(
                switchMap((beer:any) => this.getBeerByName(beer.beerName)));

        $beerObservable.subscribe((beer:BasicBeerInterface) =>
        {
            console.log('Found beer: ' + beer.name);
        });
    }

    private getBeerByName(beerName:string):Observable<BasicBeerInterface>
    {
        return this.basicBeerService.getBeerByName(beerName);
    }
}
