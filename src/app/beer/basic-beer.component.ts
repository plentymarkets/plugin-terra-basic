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

        this.beerForm.valueChanges
            .subscribe(
                (formValue:string) =>
                {
                    console.log(formValue);

                    this.basicBeerService.getBeerByName(formValue).subscribe((beer:BasicBeerInterface) =>
                    {
                        //handle response
                    });
                }
            );
    }
}
