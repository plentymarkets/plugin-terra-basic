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
    }
}
