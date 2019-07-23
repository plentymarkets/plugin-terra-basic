import {
    Component,
    OnInit
} from '@angular/core';
import { BasicContactService } from '../contact/basic-contact.service';
import {
    FormControl,
    FormGroup
} from '@angular/forms';
import {
    debounceTime,
    distinctUntilKeyChanged,
    map,
    tap,
    filter,
    switchMap,
    catchError
} from 'rxjs/operators';
import {
    Observable,
    zip,
    combineLatest
} from 'rxjs';

@Component({
    selector:    'ptb-contact-search',
    templateUrl: './contact-search.component.html',
    styleUrls:   ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit
{
    private form:FormGroup;

    constructor(private contactService:BasicContactService)
    {
        this.form = new FormGroup({
            name: new FormControl('')
        });
    }

    public ngOnInit():void
    {
        let changes$:Observable<any> = this.form.valueChanges.pipe(debounceTime(400));
        let filtered$:Observable<string> = this.form.valueChanges.pipe(
            map((changes:any) => changes.name),
            filter((name:string) => name.length > 3),
        );

        this.form.valueChanges.pipe(
            debounceTime(400),
            distinctUntilKeyChanged('name'),
            tap((changes:any) => console.log('tap', changes)),
            map((changes:any) => changes.name),
            filter((name:string) => name.length > 3),
            switchMap((name:string) => this.contactService.getContactById(name.length))
        );

        let array$:Array<Observable<any>> = [changes$, filtered$];

        zip(array$, (zipped:[any, string]) => zipped[0]).subscribe((zipped:any) => console.log('zipped', zipped));

        // Observable.combineLatest(changes$, filtered$, () => ).subscribe((combined:any) => console.log('combined', combined))
    }
}
